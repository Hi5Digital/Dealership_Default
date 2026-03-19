import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const OPTIMIZED_DIR = './public';

// Image optimization settings
const HERO_MAX_WIDTH = 1920;      // Hero images (16:9)
const CONTENT_MAX_WIDTH = 1200;   // Content block images
const LOGO_MAX_WIDTH = 270;       // Logo (2x for retina)
const QUALITY = 85;                // WebP quality (85 is excellent balance)
const LOGO_QUALITY = 90;           // Higher quality for logos to preserve sharpness
const HERO_QUALITY = 80;           // Slightly lower for hero images (large files)

// Define which images are hero images (full width)
const HERO_IMAGES = [
  'hero1.jpeg',
  'hero1.jpg',
  'platform-hero-mockup.png',
  'dealership-whatsapp-messaging-mobile.png',
  'dealership-sales-analytics-dashboard.png',
  'multi-branch-dealership-management-dashboard.png',
  'cars-co-za-crm-integration.png',
  'autotrader-crm-integration-south-africa.png',
  'xero-sage-pastel-dealership-integration.png'
];

async function optimizeImage(inputPath, outputPath, maxWidth, quality) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if needed
    let pipeline = image;
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to WebP with appropriate quality
    await pipeline
      .webp({ quality: quality, effort: 6 }) // effort: 6 for better compression
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${basename(inputPath)} -> ${basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  if (!existsSync(PUBLIC_DIR)) {
    console.error(`❌ Public directory not found: ${PUBLIC_DIR}`);
    process.exit(1);
  }
  
  const files = await readdir(PUBLIC_DIR);
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext) && !file.startsWith('.');
  });
  
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  for (const file of imageFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const nameWithoutExt = basename(file, extname(file));
    const outputPath = join(OPTIMIZED_DIR, `${nameWithoutExt}.webp`);
    
    // Determine max width and quality based on image type
    let maxWidth, quality;
    if (file.includes('logo')) {
      maxWidth = LOGO_MAX_WIDTH;
      quality = LOGO_QUALITY;
    } else if (HERO_IMAGES.includes(file)) {
      maxWidth = HERO_MAX_WIDTH;
      quality = HERO_QUALITY;
    } else {
      maxWidth = CONTENT_MAX_WIDTH;
      quality = QUALITY;
    }
    
    await optimizeImage(inputPath, outputPath, maxWidth, quality);
  }
  
  console.log('\n✨ Image optimization complete!');
}

processImages().catch(console.error);
