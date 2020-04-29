function checkResponse(response: Response): Response {
    if (!response.ok) {
        throw new Error("Response wasn't ok.");
    }
    return response;
}

export function fetchUrlAsJson<T>(url: string): Promise<T> {
    return fetch(url).then(checkResponse).then((response) => response.json());
}
