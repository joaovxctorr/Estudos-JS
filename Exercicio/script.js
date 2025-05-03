function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
  
    const pessoas = [];
  
    function receberEventoForm(evento) {
      evento.preventDefault(); // Impede o envio do formulário
  
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const idade = form.querySelector('.idade');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
  
      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        peso: peso.value,
        altura: altura.value
      });
  
      console.log(pessoas); 
  
      resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${idade.value} anos, ${peso.value}kg, ${altura.value}m</p>`;
    }
  
    form.addEventListener('submit', receberEventoForm);
  }
  
  meuEscopo(); 
  