const promise = new Promise((resolve, reject) => {
    var name = 'João'

    if (name != 1) {
        resolve('Promessa concluida')
    } else {
        reject('Promessa não concluida')
    }
})

promise.then((data) => {
    // tratando a resposta
    return data.toUpperCase()
}).then((data) => {
    // manipulando a resposta
    console.log(data);
}).catch((error) => {
    console.log(error)
})

const host = 'https://dattebayo-api.onrender.com'

fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}).then((response) => {
    return response.json()
}).then((data) => {
    const personagens = data.characters[0];

    for (let count = 0; count < count+1; count++) {
        console.log(personagens.jutsu)
    }

}).catch((error) => {
        console.log(error)
    })
