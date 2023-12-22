//o codigo e igual do games api
export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};