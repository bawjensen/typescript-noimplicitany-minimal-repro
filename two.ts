import { fetchUrlAsJson as fetchUrlAsJsonOriginal } from './three';

export function fetchUrlAsJson<T>(url: string): Promise<T> {
    return fetchUrlAsJsonOriginal(url);
}
