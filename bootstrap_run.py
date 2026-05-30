import subprocess, sys, os

# Ensure output dir exists
os.makedirs("/Users/seansim/TerraFlow-01/public", exist_ok=True)

# Try importing Pillow
try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "--quiet"])

exec(open("/Users/seansim/TerraFlow-01/generate_hero.py").read())
