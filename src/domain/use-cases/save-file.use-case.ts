import fs from 'fs';


export interface SaveFileUseCase {
    exceute: (option : SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent     : string;
    fileDestination?: string;
    fileName?       : string;

}

export class SaveFile implements SaveFileUseCase {

    constructor(
        /**
         * Repository: StorageRepository
         */
        ) {}

    exceute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: SaveFileOptions): boolean{
        


        try {

            if (!fs.existsSync(fileDestination)) {
                fs.mkdirSync(fileDestination, { recursive: true });
            }
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

            return true;
        } catch (error) {

            return false;
        }

    }


}