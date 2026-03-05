import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const OPTIMIZED_DIR = './public';

// Image optimization settings
const HERO_MAX_WIDTH = 1920;      // Hero images (16:9)
const CONTENT_MAX_WIDTH = 1200;   // Content block images
const QUALITY = 85;                // WebP quality (85 is excellent balance)

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

async function optimizeImage(inputPath, outputPath, maxWidth) {
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
    
    // Convert to WebP
    await pipeline
      .webp({ quality: QUALITY })
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
    
    // Determine max width based on image type
    const maxWidth = HERO_IMAGES.includes(file) ? HERO_MAX_WIDTH : CONTENT_MAX_WIDTH;
    
    await optimizeImage(inputPath, outputPath, maxWidth);
  }
  
  console.log('\n✨ Image optimization complete!');
}

processImages().catch(console.error);
