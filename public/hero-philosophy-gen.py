#!/usr/bin/env python3
"""
Dr. Terraplus — Philosophy Page Hero Image Generator
Run: python3 hero-philosophy-gen.py
Output: hero-philosophy.jpg (1920×1080) in the same directory
"""

import os, sys, math, random, colorsys

try:
    from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageChops
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageChops

W, H = 1920, 1080
rng  = random.Random(42)
OUT  = os.path.join(os.path.dirname(os.path.abspath(__file__)), "hero-philosophy.jpg")

print("Generating Dr. Terraplus hero image…")

# ── 1. Deep dark-green base gradient ─────────────────────────────────────────
img  = Image.new("RGB", (W, H))
draw = ImageDraw.Draw(img)
for y in range(H):
    t = y / H
    draw.line([(0,y),(W,y)], fill=(int(8+t*14), int(22+t*22), int(8+t*6)))

# ── 2. Golden-hour amber glow (horizon) ──────────────────────────────────────
for rad, ox, oy, col, scale in [
    (460,   0,  55, (175, 85, 12), 6.0),
    (310, -90,  20, (205,105, 18), 6.8),
    (220,  95, -12, (145, 62,  6), 7.5),
    (150,  20,  80, (230,140, 25), 8.0),
]:
    cx = W//2 + ox;  cy = int(H*0.60) + oy
    g  = Image.new("RGB",(W,H),(0,0,0))
    gd = ImageDraw.Draw(g)
    gd.ellipse([cx-rad,cy-rad,cx+rad,cy+rad], fill=col)
    g  = g.filter(ImageFilter.GaussianBlur(rad*0.72))
    img = ImageChops.add(img, g, scale=scale)

# ── 3. Tropical bokeh background ─────────────────────────────────────────────
bk  = Image.new("RGBA",(W,H),(0,0,0,0))
bkd = ImageDraw.Draw(bk)
for _ in range(600):
    cx = rng.randint(0,W); cy = rng.randint(0, int(H*0.78))
    r  = rng.randint(6, 115)
    h  = rng.uniform(0.22,0.40) if rng.random()>0.14 else rng.uniform(0.07,0.14)
    s  = rng.uniform(0.4, 0.9);  v = rng.uniform(0.08,0.52)
    rc,gc,bc = [int(x*255) for x in colorsys.hsv_to_rgb(h,s,v)]
    bkd.ellipse([cx-r,cy-r,cx+r,cy+r], fill=(rc,gc,bc,rng.randint(28,115)))
bk  = bk.filter(ImageFilter.GaussianBlur(30))
img = img.convert("RGBA"); img.alpha_composite(bk); img = img.convert("RGB")

# ── 4. Soil mass (lower 44% of frame) ────────────────────────────────────────
soil = Image.new("RGBA",(W,H),(0,0,0,0))
sd   = ImageDraw.Draw(soil)
top_edge = [(x, int(H*0.565)+rng.randint(-16,16)) for x in range(0,W+1,10)]
sd.polygon([(0,H),(0,int(H*0.57))]+top_edge+[(W,int(H*0.57)),(W,H)],
           fill=(24,12,5,255))
for _ in range(36000):
    sx=rng.randint(0,W); sy=rng.randint(int(H*0.50),H)
    r=rng.randint(1,3); br=rng.randint(0,75)
    sd.ellipse([sx-r,sy-r,sx+r,sy+r],
               fill=(26+br+rng.randint(0,24),12+br//2+rng.randint(0,10),
                     3+br//5+rng.randint(0,5), rng.randint(45,195)))
img=img.convert("RGBA"); img.alpha_composite(soil); img=img.convert("RGB")

# ── 5. Root network ──────────────────────────────────────────────────────────
rl  = Image.new("RGBA",(W,H),(0,0,0,0))
rdd = ImageDraw.Draw(rl)

def draw_root(draw, x, y, angle, length, width, depth=0):
    if length<5 or depth>11: return
    ex=x+math.cos(math.radians(angle))*length
    ey=y+math.sin(math.radians(angle))*length
    rr=min(255,72+depth*9+rng.randint(0,32))
    rg=min(255,45+depth*5+rng.randint(0,20))
    rb=min(255,6 +depth*2+rng.randint(0,10))
    draw.line([(x,y),(ex,ey)],fill=(rr,rg,rb,rng.randint(125,225)),width=max(1,width))
    for _ in range(rng.randint(1,3)):
        spr=rng.uniform(14,52)*rng.choice([-1,1])
        draw_root(draw,ex,ey,angle+spr,length*rng.uniform(0.46,0.75),max(1,width-1),depth+1)

for pct in [0.30,0.38,0.45,0.50,0.55,0.62,0.68]:
    rx,ry=int(W*pct),int(H*0.594)
    for ang in range(58,126,8):
        draw_root(rdd,rx,ry,ang,rng.randint(48,135),rng.randint(2,4))

rl=rl.filter(ImageFilter.GaussianBlur(0.8))
img=img.convert("RGBA"); img.alpha_composite(rl); img=img.convert("RGB")

# ── 6. Weathered hands (painterly silhouette + amber rim light) ───────────────
def hand_layer(cx, cy, flip, base_col, alpha=235, blur=1.8):
    layer=Image.new("RGBA",(W,H),(0,0,0,0))
    hd=ImageDraw.Draw(layer)
    sx=-1 if flip else 1
    pw,ph=200,98
    hd.ellipse([cx-pw,cy-ph//2,cx+int(pw*0.14*sx),cy+ph], fill=(*base_col,alpha))
    for fdx,fdy,fw,fl in [(0.55,-0.88,28,76),(0.28,-1.0,26,84),
                           (0.04,-0.96,23,80),(-0.19,-0.86,21,67)]:
        fx=cx+sx*int(pw*0.87*fdx); fy=cy+int(ph*0.08)
        ex2=fx+sx*int(fl*fdx*0.34); ey2=fy+int(fl*fdy)
        hd.line([(fx,fy),(ex2,ey2)],fill=(*base_col,alpha-10),width=fw)
        hd.ellipse([ex2-fw//2,ey2-fw//2,ex2+fw//2,ey2+fw//2],fill=(*base_col,alpha-15))
    tx=cx+sx*int(pw*0.07); ty=cy+int(ph*0.64)
    tex2=tx+sx*90; tey2=ty-54
    hd.line([(tx,ty),(tex2,tey2)],fill=(*base_col,alpha),width=33)
    hd.ellipse([tex2-16,tey2-16,tex2+16,tey2+16],fill=(*base_col,alpha))
    return layer.filter(ImageFilter.GaussianBlur(blur))

LX,LY=int(W*0.352),int(H*0.602)
RX,RY=int(W*0.648),int(H*0.602)
img=img.convert("RGBA")

# Base skin (dark weathered)
for col,bl in [((42,20,8),1.5),((60,30,12),2.2),((78,40,16),1.8)]:
    img.alpha_composite(hand_layer(LX,LY,False,col,235,bl))
    img.alpha_composite(hand_layer(RX,RY,True, col,235,bl))

# Amber rim light (back-lit from golden sun)
for col,bl,ox,oy,al in [((188,98,24),10,6,5,55),((225,135,38),16,10,8,38)]:
    img.alpha_composite(hand_layer(LX-ox,LY-oy,False,col,al,bl))
    img.alpha_composite(hand_layer(RX+ox,RY-oy,True, col,al,bl))

img=img.convert("RGB")

# ── 7. Cupped soil in palms ──────────────────────────────────────────────────
cup=Image.new("RGBA",(W,H),(0,0,0,0))
cd=ImageDraw.Draw(cup)
cx2,cy2=W//2,int(H*0.636)
cd.ellipse([cx2-222,cy2-52,cx2+222,cy2+74], fill=(30,15,6,218))
for _ in range(10000):
    sx=rng.randint(cx2-218,cx2+218); sy=rng.randint(cy2-46,cy2+68)
    r=rng.randint(1,3); br=rng.randint(0,70)
    cd.ellipse([sx-r,sy-r,sx+r,sy+r],
               fill=(28+br+rng.randint(0,22),12+br//2,3+br//5,rng.randint(75,195)))
cup=cup.filter(ImageFilter.GaussianBlur(1.3))
img=img.convert("RGBA"); img.alpha_composite(cup); img=img.convert("RGB")

# ── 8. Green seedling emerging from soil ─────────────────────────────────────
sl=Image.new("RGBA",(W,H),(0,0,0,0))
sdd=ImageDraw.Draw(sl)
stx=W//2+12; sbot=int(H*0.646); stop=int(H*0.398)

# Stem with gentle S-curve
for i in range(sbot,stop,-1):
    prog=(sbot-i)/(sbot-stop)
    sw=max(1,int(6.5-prog*4.5))
    ox2=int(math.sin(prog*math.pi*0.7)*14)
    gc=min(255,int(36+prog*138))
    sdd.ellipse([stx+ox2-sw,i-sw,stx+ox2+sw,i+sw],fill=(16,gc,14,232))

def draw_leaf(draw,bx,by,angle,length,width,color):
    ex=bx+math.cos(math.radians(angle))*length
    ey=by+math.sin(math.radians(angle))*length
    perp=angle+90
    for t in range(26):
        tt=t/25
        # Bezier midpoint for natural leaf curve
        mx=bx+(ex-bx)*0.5; my=by+(ey-by)*0.5
        ctrl_x=mx+math.cos(math.radians(perp))*width*0.7
        ctrl_y=my+math.sin(math.radians(perp))*width*0.7
        px=int((1-tt)**2*bx+2*(1-tt)*tt*ctrl_x+tt**2*ex)
        py=int((1-tt)**2*by+2*(1-tt)*tt*ctrl_y+tt**2*ey)
        lw=max(1,int(width*math.sin(tt*math.pi)))
        draw.ellipse([px-lw,py-lw,px+lw,py+lw],fill=color)
    draw.line([(bx,by),(ex,ey)],
              fill=(min(255,color[0]+55),min(255,color[1]+38),min(255,color[2]+28),100),width=1)

ly=stop+48
draw_leaf(sdd,stx,ly,-150,76,25,(30,145,36,228))
draw_leaf(sdd,stx,ly,-30, 76,25,(38,158,42,228))
draw_leaf(sdd,stx,stop+14,-160,56,18,(48,174,50,208))
draw_leaf(sdd,stx,stop+14,-20, 56,18,(55,184,54,208))
sdd.ellipse([stx-7,stop-20,stx+7,stop+2],fill=(75,208,68,210))

sl=sl.filter(ImageFilter.GaussianBlur(0.85))
img=img.convert("RGBA"); img.alpha_composite(sl); img=img.convert("RGB")

# ── 9. Bottom shadow / depth fog ─────────────────────────────────────────────
ds=Image.new("RGBA",(W,H),(0,0,0,0))
dsd=ImageDraw.Draw(ds)
for y2 in range(int(H*0.80),H):
    a=int(230*((y2-H*0.80)/(H*0.20)))
    dsd.line([(0,y2),(W,y2)],fill=(3,5,2,min(230,a)))
img=img.convert("RGBA"); img.alpha_composite(ds); img=img.convert("RGB")

# ── 10. Colour grade (cinematic amber-green teal) ─────────────────────────────
def scurve(v): n=v/255.0; n=n*n*(3-2*n); return int(n*255)

rc,gc,bc=img.split()
rc=rc.point([scurve(min(255,int(i*1.11+9)))  for i in range(256)])
gc=gc.point([scurve(min(255,int(i*0.94+2)))  for i in range(256)])
bc=bc.point([scurve(min(255,int(i*0.79   ))) for i in range(256)])
img=Image.merge("RGB",(rc,gc,bc))

# Vignette darken
vig=Image.new("RGB",(W,H),(255,255,255))
vd=ImageDraw.Draw(vig)
for s in range(75):
    pad=s*10; val=max(0,255-int(s*3.1))
    vd.rectangle([pad,pad,W-1-pad,H-1-pad],outline=(val,val,val))
vig=vig.filter(ImageFilter.GaussianBlur(70))
img=ImageChops.multiply(img,vig)

# Centre amber bloom
cb=Image.new("RGB",(W,H),(0,0,0))
cbd=ImageDraw.Draw(cb)
cbd.ellipse([W//2-520,H//2-310,W//2+520,H//2+310],fill=(22,10,2))
cb=cb.filter(ImageFilter.GaussianBlur(200))
img=ImageChops.add(img,cb,scale=1.0)

img=ImageEnhance.Contrast(img).enhance(1.28)
img=ImageEnhance.Color(img).enhance(1.24)
img=ImageEnhance.Sharpness(img).enhance(1.12)

# Film grain
grain=Image.new("RGB",(W,H))
grnd=ImageDraw.Draw(grain)
for gy in range(H):
    for gx in range(0,W,1):
        v=rng.randint(119,137)
        grnd.point([(gx,gy)],(v,v,v))
grain=grain.filter(ImageFilter.GaussianBlur(0.35))
img=ImageChops.multiply(img,grain)
img=ImageEnhance.Brightness(img).enhance(1.30)

img.save(OUT,"JPEG",quality=96,optimize=True)
print(f"✅  Saved → {OUT}  ({W}×{H}px)")
