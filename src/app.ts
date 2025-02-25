import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';


// FUnción anónima autoejecutable
(async() => {
    await main();
    console.log('Fin de la ejecución');
})();

async function main() {

    const { b:base, l:limit, s:showTable, n:name, d:destination } = yarg;

    ServerApp.run({ base, limit, showTable, name, destination });
}