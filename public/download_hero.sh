#!/bin/bash
# Auto-generated script to download hero-home.jpg for Dr. Terraplus
set -e

PROMPT="extreme%20close-up%20of%20rich%20dark%20tropical%20soil%2C%20visible%20intertwining%20plant%20roots%2C%20bioluminescent%20glowing%20microbial%20networks%20pulsing%20with%20soft%20cyan%20and%20emerald%20light%2C%20tiny%20crystal%20droplets%20of%20moisture%20on%20root%20fibers%2C%20deep%20emerald%20and%20earth%20tones%2C%20cinematic%20dramatic%20lighting%2C%20volumetric%20god%20rays%20filtering%20through%20soil%2C%20dark%20premium%20moody%20atmosphere%2C%20photorealistic%20macro%20photography%2C%208k%20ultra%20detailed%2C%20no%20text%2C%20no%20watermark"

URL="https://image.pollinations.ai/prompt/${PROMPT}?width=1920&height=1080&seed=42&model=flux&nologo=true&enhance=true"

OUTPUT="/Users/seansim/TerraFlow-01/public/hero-home.jpg"

echo "⬇️  Downloading hero image..."
curl -L -o "$OUTPUT" "$URL" --max-time 180 -A "Mozilla/5.0"
echo "✅ Saved to $OUTPUT"
ls -lh "$OUTPUT"
