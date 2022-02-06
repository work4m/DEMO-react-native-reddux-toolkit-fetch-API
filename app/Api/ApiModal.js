import API_TYPES from "./ApiTypes";

const BASE_URL = 'https://www.idocacademy.com/ws/test/api/';

const apiCall = async (url, type, params) => {
    const requestOptions = {
        method: type,
        headers: {
            'Accept': "application/json",
            'Content-Type': "multi-part/form-data",
            'Apikey': '1IMgGtHJL6pExdBcb0AhQ75qDlzVCs3vaTP9e2ZXnFwo8fiSRm',
        },
    };

    if (type === API_TYPES.POST) {
        requestOptions["body"] = params;
    }

    const response = await fetch(`${BASE_URL}${url}`, requestOptions);

    return await response.json();
};

export default apiCall;
