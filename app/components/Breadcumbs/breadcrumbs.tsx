import { useParams } from "@remix-run/react";
import { NavLink } from "@remix-run/react";

interface ActiveLink {
    link: string;
    label: string | React.ReactNode; // In case using SVG's instead of string
}

const ActiveLink = ({ link, label }: ActiveLink) => (
    <NavLink to={link} className={({ isActive, isPending }) =>
        isPending ? "text-slate-600" :
            isActive ? "bold text-gray-600 dark:text-white" : "text-gray-600 dark:text-white"}>
        {label}
    </NavLink>
)
/**
 * @returns Can be refactored for sure. Needs to see further solution within remix routes.
 */
const LinksItems = () => {
    let { artworkId, artistId } = useParams();
    const links = {
        items: [{
            label: "Home",
            link: "/"
        }, {
            label: "Artists",
            link: "/artist"
        }, {
            label: "Artworks",
            link: "/artwork"
        }]
    }
    return (
        <ul className="flex items-center flex-wrap p-3">
            {links.items.map(({ link, label }, index) =>
                <li key={index} className="inline-flex items-center">
                    <ActiveLink key={index} link={link} label={label} />
                    <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                </li>
            )}
            {artistId ?
                <li className="inline-flex items-center">
                    <ActiveLink link={`/artist/${artistId}`} label={`${artistId} Artworks`} />
                    <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                </li>
                : null}
            {artworkId ?
                <li className="inline-flex items-center">
                    <ActiveLink link={`/artwork/${artworkId}`} label={`${artworkId === "0" ? "Le feu" : "Pop art mouse 2"}`} />
                </li>
                : null}
        </ul>
    )
}

const Breadcumbs = () => <nav className="fixed bg-white dark:bg-gray-900 w-full z-10"><LinksItems /></nav >;

export default Breadcumbs;