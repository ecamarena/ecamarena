import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    // Ruta absoluta al archivo en src/data/cv
    const filePath = path.join(process.cwd(), 'src', 'data', 'cv', 'cv-edgar-camarena.pdf');

    if (!fs.existsSync(filePath)) {
        return new NextResponse('Archivo no encontrado. Asegúrate de colocar el PDF en src/data/cv/cv-edgar-camarena.pdf', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Disposition': 'attachment; filename="cv-edgar-camarena.pdf"',
            'Content-Type': 'application/pdf',
        },
    });
}
