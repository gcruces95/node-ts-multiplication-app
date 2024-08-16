import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

// console.log(yarg);

const { b:base, l:limit, s:show } = yarg;

let outputMessage = ('');
const headerMessage = `
===================================
        Tabla del ${base}
===================================\n
`;

for (let i = 1; i <= limit ; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = (headerMessage + outputMessage);

if (show) console.log(outputMessage);

const outputDir = ('outputs');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);

console.log(`Archivo tabla-${base}.txt creado en la carpeta outputs`);