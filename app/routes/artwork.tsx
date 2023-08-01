import { Suspense } from "react";
import { useLoaderData, Link, Await } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { V2_MetaFunction } from "@vercel/remix";

import { Card } from "~/components/Cards/Card";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "YourArt - Artworks" },
    { name: "description", content: "YourArt - List of Artworks" },
  ];
};

export const loader = async () => {
  const data = await Promise.all([0, 1].map(id =>
  fetch(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`)
  .then(resp => resp.json())));
  if (!data) { throw new Error("API not found") };
  return json(await data);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <section className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Artwork page</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Please select an artwork from list</p>
        <div className="w-[80%] md:w-1/2 px-6 m-auto">
          <Suspense>
            <Await resolve={data}>
              <ul className="grid gap-6 mg:gap-20 lg:gap-32 grid-cols-1 md:grid-cols-2 mt-8 text-gray-500">
                {data.map((data, index) =>
                  <li key={index}>
                    <Link to={`/artwork/${data?.title === "Le feu" ? "0" : "1"}`}>
                      <Card profile={data?.imageUrl} name={data?.title} description={`Artwork from ${data?.artistShort?.fullname}`} />
                    </Link>
                  </li>
                )}
              </ul>
            </Await>
          </Suspense>
        </div>
      </section>
    </>
  );
}