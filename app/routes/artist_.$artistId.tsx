import { Suspense } from "react";
import { Link, Await, useLoaderData } from "@remix-run/react";
import type { V2_MetaFunction, LoaderArgs } from "@vercel/remix";

import { Card } from "~/components/Cards/Card";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "YourArt - Artists" },
    { name: "description", content: "YourArt - List of artists Artworks" },
  ];
};

export const loader = async ({ params }: LoaderArgs) => {
  const url = await fetch(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${params.artistId === "Philippe Cottin" ? "0" : "1"}.json`);
  const res = await url.json();
  if (params.artistId !== "Philippe Cottin" && params.artistId !== "Sergey Piskunov") {
    throw new Response("Artist not Found", {
      status: 404
    });
  }
  if (!res) throw new Error("Error")
  return res
};

export default function PaintingId() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <section className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {data?.artistShort?.fullname}'s page
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Please select an artwork from list below</p>
        <div className="flex justify-center w-full px-6 m-auto">
          <Suspense>
            <Await resolve={data}>
              <ul className="grid grid-cols-1 w-32 mt-8 text-gray-500">
                <li>
                  <Link to={`/artwork/${data?.artistShort?.fullname === "Philippe Cottin" ? "0" : "1"}`}>
                    <Card profile={data?.imageUrl} name={data?.title} />
                  </Link>
                </li>
              </ul>
            </Await>
          </Suspense>
        </div>
      </section>
    </>
  );
}