function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {

        if(typeof msg != 'string') {
            reject("Erro");
            return;
        }

        setTimeout(() => { 
            resolve(msg.toUpperCase() + '- Passei na promise');
            return
        },tempo);
    });
}

//promise.all - resolve todos as promessas, mas se uma der errado todas sao rejeitadas
//promise.race - resolve somente a primeira promessa resolvida
//promise.resolve 
//promise.reject


const promises = [
    
    esperaAi('promise 1',3000),
    esperaAi('promise 2',500),
    esperaAi('promise 3',1000),
    esperaAi("Teste",1000),
    
];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor)
// })
// .catch(function(erro){
//     console.log(erro);
// })


// Promise.race(promises)
// .then(function(valor){
//     console.log(valor)
// })
// .catch(function(erro){
//     console.log(erro);
// })


function baixaPagina(){
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache')
    }else {
        return esperaAi('Baixei a pagina', 3000)
    }


  
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch( e => console.log((e)));