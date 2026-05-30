#!/bin/bash
set -e
# Install Pillow if needed, then generate
python3 -c "from PIL import Image" 2>/dev/null || pip3 install Pillow --quiet
python3 /Users/seansim/TerraFlow-01/generate_hero.py
