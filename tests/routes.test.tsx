import { loader as loaderArtistId } from "~/routes/artist_.$artistId";
import { loader as loaderArtworkId } from "~/routes/artwork_.$artworkId";
import { expect, describe, it } from "@jest/globals";

describe("Artist page routes", () => {
    it("should return status 404 if user is trying to reach another artist", async () => {
        const request = new Request('https://yourart-tt.vercel.app/artist');
        let result;
        try {
            await loaderArtistId({
                request,
                context: {},
                params: { artistId: "Jean-Michel Basquiat" },
            })
        } catch (error) {
            result = error
        }
        expect(result as Response).toHaveStatus(404);
    });
});

describe("Artwork page routes", () => {
    it("should return status 404 if user is trying to reach another artwork", async () => {
        const request = new Request('https://yourart-tt.vercel.app/artwork');
        let result;
        try {
            result = await loaderArtworkId({
                request,
                context: {},
                params: { artworkId: "42" },
            })
        } catch (error) {
            result = error
        }
        console.log(result)
        expect(result as Response).toHaveStatus(404);
    });
});