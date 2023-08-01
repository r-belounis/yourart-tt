import { Suspense } from "react";
import { Await } from "@remix-run/react";
import Spline from '@splinetool/react-spline';

type splineTypes = {
    url: string
}

export const SplineRender = ({ url }: splineTypes) => {return (
        <Suspense>
            <Await resolve>
                <Spline className="flex place-content-center place-items-center" scene={url} />
            </Await>
        </Suspense>
    );
}

