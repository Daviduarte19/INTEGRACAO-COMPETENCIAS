import { obterInformacoesPersonagem } from './service.js';


function exibirInformacoesPersonagem(character) {
  const characterInfoElement = document.getElementById('character-info');

//as informaçoes que aparecem na tela
  const html = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    <p>Status: ${character.status}</p>
    <p>Espécie: ${character.species}</p>
    <p>Genero: ${character.gender}</p>
    <p>Planeta de Origem: ${character.origin.name}</p>
  `;

  characterInfoElement.innerHTML = html;
}

// Exemplo: Obter informações do personagem com ID 
obterInformacoesPersonagem(1)
  .then(data => {
    exibirInformacoesPersonagem(data);
  })
  .catch(error => {
    console.error('Erro ao obter informações do personagem:', error.message);
  });

