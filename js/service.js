
const apiUrl = 'https://rickandmortyapi.com/api/';

async function obterInformacoesPersonagem(id) {
  try {
    const url = `${apiUrl}character/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro de rede - Código ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter informações do personagem:', error.message);
    throw error;
  }
}

export { obterInformacoesPersonagem };
