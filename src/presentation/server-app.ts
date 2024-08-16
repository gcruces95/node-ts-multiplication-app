import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {

    static run({base, limit, showTable, name, destination}: RunOptions){

        console.log('Server App running...');

        const table = new CreateTable().exceute({base, limit});
        const wasSaved = new SaveFile().exceute({fileContent: table, fileName: `${name}-${base}`, fileDestination: destination});

        if(showTable) console.log(table);

        (wasSaved) ? console.log('Archivo guardado') : console.log('Error al guardar el archivo');
    }
}