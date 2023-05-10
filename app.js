console.log('Olá, seja bem vindo ao app...');

function main() {
    let txtNome = 'Emilio';
    console.log(typeof (txtNome));
    console.log(txtNome);
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    txtNome = 10;
    console.log(typeof (txtNome));
    console.log(txtNome);

    readline.question('Digite seu nome\n\n', function (userInput) {
        console.log('Obrigado ' + userInput);
        console.log('Obrigado por usar o app, finalizando ...');
        readline.close();
    });
}

main();