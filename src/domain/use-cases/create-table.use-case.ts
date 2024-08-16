export interface CreateTableUseCase {
    exceute: (option : CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI (Dependency Injection)
         */
        ) {}

    exceute({base, limit = 8}: CreateTableOptions): string{
        
        let outputMessage = ('');

        const headerMessage = `
===================================
        Tabla del ${base}
===================================\n
`;

        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }

        outputMessage = (headerMessage + outputMessage);

        return outputMessage;
    }
}