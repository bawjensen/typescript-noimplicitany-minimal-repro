function checkResponse(response) {
    if (!response.ok) {
        throw new Error("Response wasn't ok.");
    }
    return response;
}

export function fetchUrlAsJson(url) {
    return fetch(url).then(checkResponse).then((response) => response.json());
}
