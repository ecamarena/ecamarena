import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const dirPath = path.join(process.cwd(), 'src', 'data', 'foto');

    if (!fs.existsSync(dirPath)) {
        return new NextResponse('Carpeta no encontrada', { status: 404 });
    }

    const files = fs.readdirSync(dirPath);
    // Buscamos la primera imagen común
    const photoFile = files.find(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));

    if (!photoFile) {
        return new NextResponse('Foto no encontrada en src/data/foto/', { status: 404 });
    }

    const filePath = path.join(dirPath, photoFile);
    const fileBuffer = fs.readFileSync(filePath);
    const ext = path.extname(photoFile).toLowerCase().replace('.', '');

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': `image/${ext === 'jpg' ? 'jpeg' : ext}`,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
