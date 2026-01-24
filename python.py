import os
from PIL import Image

# ======================
# CONFIG
# ======================
ROOT_FOLDER = "public"     # folder utama
QUALITY = 85               # kualitas webp (0–100)
DELETE_ORIGINAL = False    # True = hapus file asli

SUPPORTED_FORMATS = (".jpg", ".jpeg", ".png", ".bmp", ".tiff")


def convert_to_webp(root_folder):
    for root, _, files in os.walk(root_folder):
        for file in files:
            if file.lower().endswith(SUPPORTED_FORMATS):
                input_path = os.path.join(root, file)
                output_path = os.path.splitext(input_path)[0] + ".webp"

                try:
                    with Image.open(input_path) as img:
                        img = img.convert("RGB")
                        img.save(output_path, "webp", quality=QUALITY, method=6)

                    if DELETE_ORIGINAL:
                        os.remove(input_path)

                    print(f"✔ Converted: {input_path}")

                except Exception as e:
                    print(f"✖ Failed: {input_path} → {e}")


if __name__ == "__main__":
    convert_to_webp(ROOT_FOLDER)
    print("🔥 Done. All images converted to WebP.")
