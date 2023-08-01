import { json } from "@remix-run/node";
// import { createAlova } from 'alova';
// import GlobalFetch from 'alova/GlobalFetch';
// import ReactHook from 'alova/react';
// import type { LoaderArgs } from "@remix-run/node";

/**
   * loadTestAPI </br>
   * Simple pre-made fetch with URL from technical test API </br>
*/
export async function loadTestAPI() {
    const data = await Promise.all([0, 1].map(id =>
    fetch(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`).then(resp => resp.json())));
    // console.log("response from promise =>", data.map(data => data.title) || "no response")
    return json(await data);
}

/**
   * useFetch </br>
   * Simple fetch URL request with Json parsing </br>
   * (nb: can be combined with useParams)
   * @param {string} request - URL to provide for return fetch response
*/
export const useFetch = async (request: string) => {
    const url = await fetch(request);
    // return await url.json()
    return json(await url.json());
};

/**
   * useFetchAlova </br>
   * GET request upon URL with AlovaJS
   * @type {Data} needed by AlovaJS
   * @param {string} request - URL to provide for GET request
*/
// interface Data { data: string; }
// export const useFetchAlova = (request: string) => {
//     const alovaInstance = createAlova({ statesHook: ReactHook, requestAdapter: GlobalFetch() });
//     const get = alovaInstance.Get<Data[]>(request);
//     console.log("response from AlovaJS =>", get);
//     return get;
// }

// export const useParams = async ({ params }: LoaderArgs) => {
//     if (!params._id) {
//       throw new Response(`No client ID provided`, {status: 404});
//     }

//     const client = await useFetch(params._Id);

//     if (!client) {
//       throw new Response(`No client found by ID ${params._Id}`, {status: 404});
//     }

//     if (client === typeof Object) {
//         console.log("response from url =>", client)
//     }
    
//     return json({ client: { name: client?.artistShort?.shortname } });
//   };