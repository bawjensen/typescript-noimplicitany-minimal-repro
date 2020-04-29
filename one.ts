import { fetchUrlAsJson } from './two';

async function main(): Promise<void> {
    const response = await fetchUrlAsJson('/dummy-url');

    console.log(response); // type is `any`

    const { someDataFromResponse } = await fetchUrlAsJson('/dummy-url');

    console.log(someDataFromResponse); // type is `any`
}

main();
