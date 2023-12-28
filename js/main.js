import { obterInformacoesPersonagem } from './service.js';


function exibirInformacoesPersonagem(character) {
  const characterInfoElement = document.getElementById('character-info');


  const html = ` 
    <h2> <p> Nome: ${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    <p>Status: ${character.status}</p>
    <p>Espécie: ${character.species}</p>
    <p>Gênero: ${character.gender}</p>
    <p>Planeta de Origem: ${character.origin.name}</p>
  `;

  characterInfoElement.innerHTML = html;
}




obterInformacoesPersonagem(118)
  .then(data => {
    exibirInformacoesPersonagem(data);
  })
  .catch(error => {
    console.error('Erro ao obter informações do personagem:', error.message);
  });