from PIL import Image
import numpy as np

def make_logo_transparent():
    # Open the WebP image
    img = Image.open('src/assets/mazuba-logo.webp')
    
    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Convert to numpy array for pixel manipulation
    img_array = np.array(img)
    
    # Sample multiple points to find background color
    # Check corners and edges for better background detection
    width, height = img.size
    corners_and_edges = [
        img_array[0, 0],    # top-left
        img_array[0, -1],   # top-right
        img_array[-1, 0],   # bottom-left
        img_array[-1, -1],  # bottom-right
        img_array[0, width//2],     # top-center
        img_array[-1, width//2],    # bottom-center
        img_array[height//2, 0],     # left-center
        img_array[height//2, -1],    # right-center
    ]
    
    # Find the most common color among sampled points
    from collections import Counter
    colors = [tuple(color[:3]) for color in corners_and_edges]  # Ignore alpha
    most_common_color = Counter(colors).most_common(1)[0][0]
    bg_color = list(most_common_color) + [255]  # Add alpha channel
    
    # Create mask for pixels similar to background color
    # Lower tolerance for more precise background removal
    tolerance = 25
    
    # Also specifically target white/light backgrounds
    white_mask = (
        (img_array[:, :, 0] > 200) &  # Red channel high
        (img_array[:, :, 1] > 200) &  # Green channel high  
        (img_array[:, :, 2] > 200)    # Blue channel high
    )
    
    # Combine both masks
    color_mask = (
        (np.abs(img_array[:, :, 0] - bg_color[0]) < tolerance) &
        (np.abs(img_array[:, :, 1] - bg_color[1]) < tolerance) &
        (np.abs(img_array[:, :, 2] - bg_color[2]) < tolerance)
    )
    
    mask = color_mask | white_mask
    
    # Set alpha channel to 0 (transparent) for background pixels
    img_array[mask, 3] = 0
    
    # Convert back to PIL Image
    transparent_img = Image.fromarray(img_array)
    
    # Save as PNG (supports transparency)
    transparent_img.save('src/assets/mazuba-logo-transparent.png', 'PNG')
    print("Transparent logo saved as src/assets/mazuba-logo-transparent.png")

if __name__ == "__main__":
    make_logo_transparent()
