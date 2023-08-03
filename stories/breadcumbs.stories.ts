import type { Meta, StoryObj } from "@storybook/react";
import Breadcumbs from "./components/Breadcumbs/breadcrumbs"

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

const meta = {
    title: "YourArt/Breadcumbs",
    component: Breadcumbs,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
        bgColor: {
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color of navigation' },
            },
        },
        darkBgColor: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color for dark mode' },
            },
        },
        link: {
            control: 'object',
            options: links,
            table: {
                defaultValue: { summary: ['/', '/Artists', '/Artwork'] },
                type: { summary: 'Background color' },
            },
        },
        label: {
            control: 'object',
            options: links,
            table: {
                defaultValue: { summary: ['Home', 'Artists', 'Artwork'] },
                type: { summary: 'Background color' },
            },
        },
        fill: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color' },
            }, 
        },
        textSVGColor: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color' },
            }, 
        },
        textColorPending: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color' },
            }, 
        },
        textColorActive: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color' },
            }, 
        },
        textDark: { 
            control: "color",
            table: {
                defaultValue: { summary: "#000" },
                type: { summary: 'Background color' },
            }, 
        }
    },
} satisfies Meta<typeof Breadcumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Links: Story = {
    args: {
        bgColor: "gray",
        darkBgColor: "color",
        link: "object",
        label: "object",
        fill: "fill",
        textSVGColor: "color",
        textColorPending: "color",
        textColorActive: "color",
        textDark: "color"
    },
};