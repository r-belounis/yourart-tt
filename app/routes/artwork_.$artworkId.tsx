import { Suspense } from "react";
import { Await, useLoaderData, useSearchParams } from "@remix-run/react";
import { motion } from "framer-motion";
import type { V2_MetaFunction, LoaderArgs } from "@remix-run/node";

// Components
import { Input } from "~/components/Inputs/Input";
import { Slider } from "~/components/Sliders/slider";
import { SplineRender } from "~/components/3D/SplineRender";
import ModalContainer, { ModalBody } from "~/components/Modal/modal";
import AccordionContainer, { AccordionDetails, AccordionSummary, AccordionInnerSummary } from "~/components/Accordion/accordion";

// Helpers
import { capitalize } from "~/utils/helpers/capitalize";
import { CurrencyConvertor } from "~/utils/helpers/currency";

// Icons
import EyeIcon from "~/assets/icons/eye";
import AR from "~/assets/icons/ar";
import Star from "~/assets/icons/star";
import Hourglass from "~/assets/icons/hourglass";
import Validate from "~/assets/icons/validate";
import Delivery from "~/assets/icons/delivery";
import Localization from "~/assets/icons/localization";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "YourArt - Artwork" },
        { name: "description", content: "YourArt - Artwork" },
    ];
};

export const loader = async ({ params }: LoaderArgs) => {
    const url = await fetch(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${params.artworkId}.json`);
    const res = await url.json();
    if (params.artworkId !== "0" && params.artworkId !== "1") {
        throw new Response("Artist not Found", {
            status: 404
        });
    };
    if (!res) throw new Error("Error")
    return res;
};

const Modal = () => {
    const data = useLoaderData<typeof loader>();
    const [params, setParams] = useSearchParams();
    const selectedImage: any = params.get("sliderImage");
    const modalCloseActions = () => {
        params.delete("modal");
        params.delete("vr");
        params.delete("sliderImage");
        setParams(params);
    }
    return (
        <>
            <ModalContainer open={!!params.get("modal")} onClose={modalCloseActions}>
                <ModalBody>
                    {params.get("vr") === "false" ?
                        <img className="h-60 md:h-[80%] object-cover" src={selectedImage} /> :
                        <SplineRender url={data.title === "Le feu" ?
                            "https://prod.spline.design/R84hmC5I9HCqTkDp/scene.splinecode" :
                            "https://prod.spline.design/SGrkiqQsrQgU0Fxq/scene.splinecode"}
                        />
                    }
                </ModalBody>
            </ModalContainer>
        </>
    )
}

const LeftSideTop = () => {
    const data = useLoaderData<typeof loader>();
    const [params, setParams] = useSearchParams();

    const handleModal3D = () => {
        setParams({
            ...params,
            modal: "true",
            vr: "true"
        });
    }

    return (
        <section className="left-side-top">
            <figure className="flex justify-center overflow-hidden">
                <img className="max-h-96 w-full object-contain" src={data?.imageUrl} alt={data?.title} />
            </figure>
            <div className="flex place-content-around">
                <button className="flex items-center dark:text-white group" onClick={handleModal3D}>
                    <EyeIcon className="w-4 mr-3 fill-black dark:fill-white group-hover:fill-sky-600" />
                    <span className="group-hover:text-sky-600">VIEW IN A ROOM</span>
                </button>
                <button className="flex items-center dark:text-white group" onClick={handleModal3D}>
                    <AR className="w-4 mr-3 fill-none stroke-black dark:stroke-white group-hover:stroke-sky-600" />
                    <span className="group-hover:text-sky-600">AR View</span>
                </button>
            </div>
            <Suspense>
                <Await resolve={data.otherArtworkImages}>
                    <div className="grid gap-6 grid-cols-1">
                        <AccordionContainer>
                            <AccordionDetails>
                                <AccordionSummary title="Description" />
                                <AccordionInnerSummary>
                                    <span className="dark:text-white">{data.description}</span>
                                </AccordionInnerSummary>
                            </AccordionDetails>
                            <AccordionDetails>
                                <AccordionSummary title="SUBJECT, STYLE, MEDIUM, MATERIALS" />
                                <AccordionInnerSummary>
                                    <div className="flex mt-2">
                                        <ul className="mr-4 dark:text-white">
                                            <li>SUBJECT</li>
                                            <li>STYLE</li>
                                            <li>MEDIUM</li>
                                            <li>MATERIALS</li>
                                        </ul>
                                        <ul className="text-slate-500 dark:text-white">
                                            <li>{data.subjects.join(', ')}</li>
                                            <li>{data.styles.join(', ')}</li>
                                            <li>{data.mediums.join(', ')}</li>
                                            <li>{data.materials.join(', ')}</li>
                                        </ul>
                                    </div>
                                </AccordionInnerSummary>
                            </AccordionDetails>
                        </AccordionContainer >
                    </div>
                </Await>
            </Suspense>
        </section>
    )
}

const RightSideTop = () => {
    const data = useLoaderData<typeof loader>();

    return (
        <section className="right-side-top flex flex-col justify-between max-h-[32rem] dark:text-white">
            <div className="flex place-content-between">
                <h1 className="flex text-lg font-bold">{data?.title}</h1>
                <motion.button className="flex w-4"><Star /></motion.button>
            </div>
            <div className="flex">
                <h2 className="mr-8 text-amber-300 dark:text-inherit">{data?.artistShort?.fullname}</h2>
                <p className="text-slate-400 dark:text-inherit">France</p>
            </div>
            <p>{`${capitalize(data?.category)},`}<span className="ml-2">{data?.creationYear}</span></p>
            <p>{`${data?.dimensions.width} W x ${data?.dimensions.height} H ${data?.dimensions.depth} D`}</p>
            <p className="text-lg font-bold">{CurrencyConvertor(data?.price, "fr-FR", "EUR")}</p>
            <div className="grid gap-4 grid-cols-1 place-content center">
                <button className="inline-flex w-40 h-12 items-center justify-center gap-2 px-6 text-sm font-medium tracking-wide text-white dark:text-black transition duration-300 rounded-full whitespace-nowrap bg-black dark:bg-white hover:bg-emerald-600 hover:text-white focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
                    <span>Acquire</span>
                </button>
                <button className="inline-flex w-40 h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-gray-500 dark:border-white px-6 text-sm font-medium tracking-wide dark:text-white transition duration-300 hover:border-sky-600 hover:text-sky-600 focus:border-gray-700 focus:text-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:shadow-none">
                    <span>Make an offer</span>
                </button>
            </div>
            <p className="flex place-items-center"><span className="mr-4"><Hourglass /></span>PRE-RESERVE FOR 24 HOURS</p>
            <p className="flex place-items-center"><span className="mr-4"><Validate /></span><span className="text-bold">131&euro; estimated delivery fee</span> for France</p>
            <p>In ordre to obtain an accurate delivery fee, please enter your country of residence and zip code :</p>
            <div className="grid gap-4 grid-cols-2">
                <Input label="Country" />
                <Input label="Zip code" />
            </div>
            <p className="flex place-items-center"><span className="mr-4"><Delivery /></span>Delivery fee is 129€</p>
            <p className="flex place-items-center"><span className="mr-4"><Localization /></span>Free pickup in <span className="ml-1 font-bold">Bruxelles, Belgium</span></p>
            <p className="flex place-items-center"><span className="mr-4"><Validate /></span>Try 14 days at home for free</p>
        </section>
    )
}

export default function ArtworkId() {
    const data = useLoaderData<typeof loader>();
    return (
        <>
            <div className="container">
                <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
                    <LeftSideTop />
                    <RightSideTop />
                </div>
                <div className="bottom-content">
                    <Slider images={data.otherArtworkImages} />
                </div>
                <Modal /> {/* You can throw it anywhere */}
            </div>
        </>
    );
}