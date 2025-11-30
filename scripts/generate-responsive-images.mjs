import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const publicDir = path.resolve(process.cwd(), 'public')

const sources = [
  'newzifyDesk.png',
  'Movie.png',
  'popcornDesk.png',
  'valTrackerDesk.png',
  'passkeeper1.png',
  'classroom.png',
  'workDemo1.png'
]

const sizes = [480, 768, 1200]

async function generate(file) {
  const input = path.join(publicDir, file)
  if (!fs.existsSync(input)) {
    console.warn('source missing:', input)
    return
  }

  const basename = path.basename(file, path.extname(file))

  for (const size of sizes) {
    const outWebp = path.join(publicDir, `${basename}-${size}.webp`)
    const outAvif = path.join(publicDir, `${basename}-${size}.avif`)

    console.log(`Generating ${outWebp} and ${outAvif}`)

    await sharp(input)
      .resize(size)
      .webp({ quality: 80 })
      .toFile(outWebp)

    await sharp(input)
      .resize(size)
      .avif({ quality: 70 })
      .toFile(outAvif)
  }
}

async function main() {
  for (const file of sources) {
    try {
      await generate(file)
    } catch (err) {
      console.error('failed to generate for', file, err)
    }
  }
}

main().then(() => console.log('done')).catch((err) => console.error(err))
