console.log('Olá, seja bem vindo ao app...');

async function main() { 
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const userInput = await obterNomeUsuario();
    console.log(userInput);
    readline.close();
    
    
    async function obterNomeUsuario() {
        return new Promise(function (resolve) {
            readline.question('Digite seu nome', resolve);
        });
    }
}

main();

