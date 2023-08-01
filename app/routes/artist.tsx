import { Suspense } from "react";
import { useLoaderData, Link, Await } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";

import { Card } from "~/components/Cards/Card";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "YourArt - Painting" },
    { name: "description", content: "YourArt - Painting" },
  ];
};

export async function loader() {
  const data = await Promise.all([0, 1].map(id =>
  fetch(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`)
  .then(resp => resp.json())));
  if (!data) { throw new Error("API not found") };
  return json(await data);
}

export default function Painting() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <section className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Artist page</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Please select an artist</p>
        <div className="w-[60%] md:w-1/2 px-6 m-auto">
          <Suspense>
            <Await resolve={data}>
              <ul className="grid gap-6 lg:gap-32 grid-cols-1 md:grid-cols-2 items-center mt-8 text-gray-500">
                {data.map((data, index) =>
                  <li key={index}>
                    <Link to={`/artist/${encodeURI(data?.artistShort?.fullname)}`}>
                      <Card profile={data?.imageUrl} name={data?.artistShort?.fullname} />
                    </Link>
                  </li>
                )}
              </ul>
            </Await>
          </Suspense>
        </div>
      </section>
    </>
  )
}