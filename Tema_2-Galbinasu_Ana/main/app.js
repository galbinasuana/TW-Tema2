function addTokens(input, tokens){
    // test 1 -- verificare string 
    if(typeof input !== 'string') {
        throw Error('Input should be a string');
    }

    // test 2 -- verificare cp 6 caractere
    if(input.length < 6) {
        throw Error('Input shoud have at leat 6 characters');
    }

    // test 3 -- {tokenName: string}
    // const strArray = tokens.every(token => {...});
    // const strArray = tokens.every(token =>  typeof token == 'string');
    // if(!strArray || tokens.length <= 0) {
    //     throw Error('Invalid array format!')
    // }

    // test 4 -- nu contine ... => returnez val initiala
    let contDots = input.includes('...');
    if(!contDots)
        return input;

    // test 5 -- contine ... => inlocuiesc valorile specifice
    const noContDots = input.split('...');
    let newInp;
    for(i = 0; i < noContDots.length - 1; i++) {
        newInp = input.replace('...', '${' + tokens[i].tokenName + '}');
    }
    return newInp;
}

const app = {
    addTokens: addTokens
}

module.exports = app;