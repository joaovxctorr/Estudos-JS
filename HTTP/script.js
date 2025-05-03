// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElements = document.querySelector('#app');

let posts = [];

function nutriApp() {
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((response) => { // Pega a resposta da requisição
            return response.json(); // Transforma a resposta em JSON
        })
        .then((response) => { // Pega a resposta da transformação em JSON
            posts = response; // Array de objetos

            posts.map((post) => { // Percorre o array de objetos e cria um novo array
                let item = document.createElement('div'); // Cria um novo elemento div
                item.setAttribute('class', 'post'); // Adiciona a classe 'post' ao elemento div
                item.innerHTML = ` 
                    <h2>${post.titulo}</h2>
                    <img src="${post.capa}" alt="${post.titulo}">
                    <p>${post.subtitulo}</p>
                `;

                listElements.appendChild(item); // Adiciona o elemento div ao elemento pai
            });

            })
            .catch(() => { // trata o erro
                console.log('Deu algum problema');
        })
}

nutriApp(); // Chama a função para exibir os posts na tela