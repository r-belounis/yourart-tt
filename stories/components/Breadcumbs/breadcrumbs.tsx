import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from "@remix-run/react";

interface ActiveLink {
    link?: any[] | any;
    label?: any[] | any;
}

interface ActiveLinkStyles extends ActiveLink {
    textColorPending: string,
    textColorActive: string,
    textDark: string
}

interface LinksItems extends ActiveLink, ActiveLinkStyles {
    fill: string,
    textSVGColor: string
}

interface BreadcumbsContainer extends LinksItems {
    bgColor: string,
    darkBgColor: string
}

const ActiveLink = ({ link, label, textColorPending, textColorActive, textDark }: ActiveLinkStyles) => (
    <NavLink to={link} className={({ isActive, isPending }) =>
        isPending ? `text-[${textColorPending}]` :
            isActive ? `bold text-[${textColorActive}] dark:text-[${textDark}]` : `text-[${textColorActive}] dark:text-[${textDark}]`}>
        {label}
    </NavLink>
)

const LinksItems = ({ link, fill, textSVGColor, textColorPending, textColorActive, textDark }: LinksItems) => {
    console.log(JSON.parse(link), fill)
    return (
        <ul className="flex items-center flex-wrap p-3">
            {JSON.parse(link.items).map(({ links, labels }: any, index: number) =>
                <li key={index} className="inline-flex items-center">
                    <ActiveLink link={links} label={labels} textColorPending={textColorPending} textColorActive={textColorActive} textDark={textDark} />
                    <svg className={`w-5 h-auto fill-[${fill}] mx-2 text-[${textSVGColor}]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                </li>
            )}
            {/* <li  className="inline-flex items-center">
                <ActiveLink link={link} label={label} textColorPending={textColorPending} textColorActive={textColorActive} textDark={textDark} />
                <svg className={`w-5 h-auto fill-[${fill}] mx-2 text-[${textSVGColor}]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
            </li> */}
        </ul>
    )
}

// Needs BrowserRouter to use NavLinks in Storybook.
const Breadcumbs = ({ bgColor, darkBgColor, link, label, fill, textSVGColor, textColorPending, textColorActive, textDark }: BreadcumbsContainer) =>
    <BrowserRouter>
        <nav className={`fixed bg-[${bgColor}] dark:bg-[${darkBgColor}] w-full z-10`}>
            <LinksItems link={link} label={label} fill={fill} textSVGColor={textSVGColor} textColorPending={textColorPending} textColorActive={textColorActive} textDark={textDark} />
        </nav >
    </BrowserRouter>;

export default Breadcumbs;