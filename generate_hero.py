
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageChops
import math, random, colorsys, sys

W, H = 1920, 1080
rng = random.Random(42)

# ── 1. Background ─────────────────────────────────────────────────────────────
img = Image.new("RGB", (W, H), (10, 18, 8))
draw = ImageDraw.Draw(img)

for y in range(H):
    t = y / H
    r = int(8 + t * 14)
    g = int(22 + t * 20)
    b = int(8 + t * 6)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Golden amber glow (horizon / golden hour)
for rad, ox, oy, col in [
    (420, 0,    60,  (170, 80, 10)),
    (300, -80,  20,  (200, 100, 15)),
    (200, 90,  -10,  (140, 60, 5)),
]:
    cx = W//2 + ox
    cy = int(H*0.60) + oy
    glow = Image.new("RGB", (W, H), (0,0,0))
    gd  = ImageDraw.Draw(glow)
    gd.ellipse([cx-rad, cy-rad, cx+rad, cy+rad], fill=col)
    glow = glow.filter(ImageFilter.GaussianBlur(rad*0.7))
    img  = ImageChops.add(img, glow, scale=6.5)

# ── 2. Blurred tropical bokeh background ─────────────────────────────────────
bokeh = Image.new("RGBA", (W, H), (0,0,0,0))
bkd   = ImageDraw.Draw(bokeh)
for _ in range(500):
    cx = rng.randint(0, W)
    cy = rng.randint(0, int(H*0.75))
    r  = rng.randint(8, 110)
    h  = rng.uniform(0.22, 0.40) if rng.random()>0.15 else rng.uniform(0.07,0.13)
    s  = rng.uniform(0.5, 0.9)
    v  = rng.uniform(0.10, 0.50)
    rc,gc,bc = [int(x*255) for x in colorsys.hsv_to_rgb(h,s,v)]
    bkd.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(rc,gc,bc, rng.randint(35,120)))
bokeh = bokeh.filter(ImageFilter.GaussianBlur(28))
img   = img.convert("RGBA")
img.alpha_composite(bokeh)
img   = img.convert("RGB")

# ── 3. Soil mass ──────────────────────────────────────────────────────────────
soil = Image.new("RGBA", (W, H), (0,0,0,0))
sd   = ImageDraw.Draw(soil)

# Background soil slab (bottom 45% of image)
soil_top_pts = []
for x in range(0, W+1, 12):
    noise_y = int(H*0.56) + rng.randint(-14, 14)
    soil_top_pts.append((x, noise_y))
poly = [(0, H)] + [(0, int(H*0.57))] + soil_top_pts + [(W, int(H*0.57))] + [(W, H)]
sd.polygon(poly, fill=(26, 14, 6, 255))

# Soil texture stipple
for _ in range(30000):
    sx = rng.randint(0, W)
    sy = rng.randint(int(H*0.50), H)
    r  = rng.randint(1, 3)
    br = rng.randint(0, 70)
    sd.ellipse([sx-r, sy-r, sx+r, sy+r],
               fill=(28+br+rng.randint(0,22), 14+br//2+rng.randint(0,10),
                     4+br//5+rng.randint(0,5), rng.randint(50,190)))

img = img.convert("RGBA")
img.alpha_composite(soil)
img = img.convert("RGB")

# ── 4. Roots ──────────────────────────────────────────────────────────────────
rl = Image.new("RGBA", (W, H), (0,0,0,0))
rd = ImageDraw.Draw(rl)

def draw_root(draw, x, y, angle, length, width, depth=0):
    if length < 5 or depth > 10: return
    ex = x + math.cos(math.radians(angle)) * length
    ey = y + math.sin(math.radians(angle)) * length
    rr = min(255, 75+depth*9+rng.randint(0,30))
    rg = min(255, 48+depth*5+rng.randint(0,18))
    rb = min(255, 8+depth*2+rng.randint(0,8))
    draw.line([(x,y),(ex,ey)], fill=(rr,rg,rb,rng.randint(130,220)), width=max(1,width))
    for _ in range(rng.randint(1,3)):
        spr = rng.uniform(14,50)*rng.choice([-1,1])
        draw_root(draw, ex, ey, angle+spr, length*rng.uniform(0.48,0.76), max(1,width-1), depth+1)

for rx, ry in [(int(W*p), int(H*0.60)) for p in [0.32,0.40,0.48,0.52,0.58,0.66]]:
    for ang in range(62,122,9):
        draw_root(rd, rx, ry, ang, rng.randint(50,130), rng.randint(2,4))

rl = rl.filter(ImageFilter.GaussianBlur(0.7))
img = img.convert("RGBA"); img.alpha_composite(rl); img = img.convert("RGB")

# ── 5. Hands (painterly silhouette with rim light) ───────────────────────────
def make_hand_shape(cx, cy, flip, base_col):
    layer = Image.new("RGBA", (W,H),(0,0,0,0))
    hd    = ImageDraw.Draw(layer)
    sx    = -1 if flip else 1
    pw, ph = 195, 95

    # Palm
    hd.ellipse([cx-pw, cy-ph//2, cx+int(pw*0.15*sx), cy+ph],
               fill=(*base_col, 235))

    # 4 fingers
    fdata = [(0.55,-0.88,27,75),(0.28,-1.0,25,82),(0.04,-0.96,23,78),(-0.19,-0.87,21,65)]
    for fdx,fdy,fw,flen in fdata:
        fx = cx + sx*int(pw*0.88*fdx)
        fy = cy + int(ph*0.08)
        ex2 = fx + sx*int(flen*fdx*0.35)
        ey2 = fy + int(flen*fdy)
        hd.line([(fx,fy),(ex2,ey2)], fill=(*base_col,225), width=fw)
        hd.ellipse([ex2-fw//2,ey2-fw//2,ex2+fw//2,ey2+fw//2], fill=(*base_col,215))

    # Thumb
    tx = cx + sx*int(pw*0.08)
    ty = cy + int(ph*0.62)
    tex2 = tx + sx*88
    tey2 = ty - 52
    hd.line([(tx,ty),(tex2,tey2)], fill=(*base_col,220), width=32)
    hd.ellipse([tex2-16,tey2-16,tex2+16,tey2+16], fill=(*base_col,215))

    return layer.filter(ImageFilter.GaussianBlur(1.8))

LX, LY = int(W*0.355), int(H*0.605)
RX, RY = int(W*0.645), int(H*0.605)

img = img.convert("RGBA")
for col,bl,off in [((55,28,10),2.5,0),((80,42,16),8,4),((42,20,6),1.5,0)]:
    lh = make_hand_shape(LX-off, LY-off//2, False, col)
    rh = make_hand_shape(RX+off, RY-off//2, True,  col)
    img.alpha_composite(lh)
    img.alpha_composite(rh)

# Rim light (warm amber edge)
for col,bl,ox,oy in [((185,95,22),9,5,4),((220,130,35),14,8,6)]:
    for flip,cx2,cy2 in [(False,LX,LY),(True,RX,RY)]:
        rim = make_hand_shape(cx2-(ox if not flip else -ox), cy2-oy, flip, col)
        rim_blur = rim.filter(ImageFilter.GaussianBlur(bl))
        img.alpha_composite(rim_blur)

img = img.convert("RGB")

# ── 6. Cupped soil in hands ──────────────────────────────────────────────────
cup = Image.new("RGBA",(W,H),(0,0,0,0))
cd  = ImageDraw.Draw(cup)
cx2, cy2 = W//2, int(H*0.638)
cd.ellipse([cx2-215,cy2-50,cx2+215,cy2+72], fill=(32,17,7,215))
for _ in range(8000):
    sx = rng.randint(cx2-210,cx2+210)
    sy = rng.randint(cy2-44, cy2+66)
    r  = rng.randint(1,3)
    br = rng.randint(0,65)
    cd.ellipse([sx-r,sy-r,sx+r,sy+r],
               fill=(30+br+rng.randint(0,20),14+br//2,4+br//5, rng.randint(80,190)))
cup = cup.filter(ImageFilter.GaussianBlur(1.2))
img = img.convert("RGBA"); img.alpha_composite(cup); img = img.convert("RGB")

# ── 7. Seedling stem + leaves ────────────────────────────────────────────────
sl  = Image.new("RGBA",(W,H),(0,0,0,0))
sdd = ImageDraw.Draw(sl)

stx = W//2 + 10
sbot, stop = int(H*0.648), int(H*0.405)

# Stem with curvature
for i in range(sbot, stop, -1):
    prog = (sbot-i)/(sbot-stop)
    sw   = max(1, int(6-prog*4))
    offset_x = int(math.sin(prog*math.pi*0.6)*12)
    gc = min(255, int(38+prog*130))
    sdd.ellipse([stx+offset_x-sw, i-sw, stx+offset_x+sw, i+sw],
                fill=(18,gc,16,230))

def draw_leaf(draw, bx, by, angle, length, width, color):
    ex = bx + math.cos(math.radians(angle))*length
    ey = by + math.sin(math.radians(angle))*length
    mx = bx + math.cos(math.radians(angle))*length*0.5
    my = by + math.sin(math.radians(angle))*length*0.5
    perp = angle + 90
    ctrl_x = mx + math.cos(math.radians(perp))*width*0.6
    ctrl_y = my + math.sin(math.radians(perp))*width*0.6
    for t in range(24):
        tt = t/23
        px = int((1-tt)**2*bx + 2*(1-tt)*tt*ctrl_x + tt**2*ex)
        py = int((1-tt)**2*by + 2*(1-tt)*tt*ctrl_y + tt**2*ey)
        lw = max(1, int(width*math.sin(tt*math.pi)))
        draw.ellipse([px-lw,py-lw,px+lw,py+lw], fill=color)
    # vein
    draw.line([(bx,by),(ex,ey)], fill=(min(255,color[0]+60),min(255,color[1]+40),min(255,color[2]+30),120), width=1)

ly = stop + 45
# Primary leaves
draw_leaf(sdd, stx, ly, -148, 72, 24, (32,148,38,225))
draw_leaf(sdd, stx, ly, -32,  72, 24, (40,162,44,225))
# Secondary pair (higher)
draw_leaf(sdd, stx, stop+12, -158, 54, 17, (50,178,52,205))
draw_leaf(sdd, stx, stop+12, -22,  54, 17, (58,188,56,205))
# Tiny apical bud
sdd.ellipse([stx-6,stop-18,stx+6,stop+2], fill=(80,210,70,200))

sl = sl.filter(ImageFilter.GaussianBlur(0.8))
img = img.convert("RGBA"); img.alpha_composite(sl); img = img.convert("RGB")

# ── 8. Foreground soil shadow / depth ─────────────────────────────────────────
fs = Image.new("RGBA",(W,H),(0,0,0,0))
fd = ImageDraw.Draw(fs)
for y2 in range(int(H*0.82), H):
    alpha = int(220 * ((y2-H*0.82)/(H*0.18)))
    fd.line([(0,y2),(W,y2)], fill=(4,6,2,min(220,alpha)))
img = img.convert("RGBA"); img.alpha_composite(fs); img = img.convert("RGB")

# ── 9. Colour grade ──────────────────────────────────────────────────────────
def scurve(v):
    n = v/255.0; n = n*n*(3-2*n); return int(n*255)

r_ch,g_ch,b_ch = img.split()
r_ch = r_ch.point([scurve(min(255,int(i*1.10+8))) for i in range(256)])
g_ch = g_ch.point([scurve(min(255,int(i*0.95+2))) for i in range(256)])
b_ch = b_ch.point([scurve(min(255,int(i*0.80)))   for i in range(256)])
img  = Image.merge("RGB",(r_ch,g_ch,b_ch))

# Vignette
vig = Image.new("RGB",(W,H),(255,255,255))
vd3 = ImageDraw.Draw(vig)
steps = 72
for s in range(steps):
    pad = s*10
    val = max(0, 255 - int(s*(255/steps)*1.0))
    vd3.rectangle([pad,pad,W-1-pad,H-1-pad], outline=(val,val,val))
vig = vig.filter(ImageFilter.GaussianBlur(65))
img = ImageChops.multiply(img, vig)

# Ambient centre warm glow
cg  = Image.new("RGB",(W,H),(0,0,0))
cgd = ImageDraw.Draw(cg)
cgd.ellipse([W//2-500,H//2-300,W//2+500,H//2+300], fill=(20,9,2))
cg  = cg.filter(ImageFilter.GaussianBlur(190))
img = ImageChops.add(img, cg, scale=1.0)

img = ImageEnhance.Contrast(img).enhance(1.25)
img = ImageEnhance.Color(img).enhance(1.22)
img = ImageEnhance.Sharpness(img).enhance(1.1)

# Film grain
grain = Image.new("RGB",(W,H))
grnd  = ImageDraw.Draw(grain)
for gy in range(H):
    for gx in range(0,W,2):
        v = rng.randint(120,136)
        grnd.point([(gx,gy)],(v,v,v))
grain = grain.filter(ImageFilter.GaussianBlur(0.3))
img   = ImageChops.multiply(img, grain)
img   = ImageEnhance.Brightness(img).enhance(1.32)

out = "/Users/seansim/TerraFlow-01/public/hero-philosophy.jpg"
img.save(out, "JPEG", quality=96, optimize=True)
print("Saved:", out)
