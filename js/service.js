import { handleErrors } from "./exception.js";
var URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacter = async () => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response = await fetch(URL);
        
        //lidando com os erros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};

