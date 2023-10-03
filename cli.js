import pegaArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./http-validacao.js";


const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2] , false);

    if (caminho[3] === 'validar'){
        console.log(chalk.bgRed.black("LINKS VALIDADOS:"), await validaURL(resultado));
    } 
    else if (caminho[3] === 'links'){
        console.log(chalk.bgRed.black("LISTA DE LINKS:"), resultado);

    }else if (caminho[3] === 'leitura'){
        console.log(chalk.bgRed.black("LISTA DE leitura:"),await pegaArquivo(caminhoDoArquivo[2] , true) );
}   else{
    console.log( chalk.bgWhite.red ("Leitura incorreta!"))
    }
}
processaTexto(caminho);

