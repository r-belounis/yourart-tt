import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useNavigation } from "@remix-run/react";
// import { ExternalScripts } from "remix-utils";
import type { LinksFunction } from "@remix-run/server-runtime";

// Components
import Breadcumbs from "~/components/Breadcumbs/breadcrumbs";
import { ErrorHandlings } from "./blocks/ErrorHandlings";
import { LoaderState } from "~/components/Loaders/loaderState";

// TailwindCSS base styles
import styles from "~/tailwind.css";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// External scripts
// export const handle = { 
//   scripts: () => [{ type: "module", src: 'https://unpkg.com/@splinetool/viewer@0.9.409/build/spline-viewer.js' }]
// }

export default function App() {
  const navigation = useNavigation();
  return (
    <>
      <Document>
        {navigation.state === "loading" ? <LoaderState /> : null}
        <Breadcumbs />
        <div className="pt-[48px] px-4 md:px-12">
          <Outlet />
          <ScrollRestoration />
        </div>
      </Document>
    </>
  )
}

export function ErrorBoundary() {
  return (
    <Document>
      <ErrorHandlings />
    </Document>
  )
}

export function Document(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900">
        {props.children}
        {/* <ExternalScripts /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}