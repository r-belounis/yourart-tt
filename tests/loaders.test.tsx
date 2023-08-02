import { loader } from "~/routes/artist"; // Or artworks, same function to load data.
import { expect, describe, it } from "@jest/globals";

describe("Loader Artists", () => {
  it("should return an object with the fullname of artist", async () => {
    const response = await loader();
    let data = await response.json();
    let name = data.map(data => data.artistShort.fullname)
    expect(name).toEqual(["Philippe Cottin", "Sergey Piskunov"]);
  });
});

describe("Loader Artworks", () => {
  it("should return an object with the name of artwork", async () => {
    const response = await loader();
    let data = await response.json();
    let name = data.map(data => data.title)
    expect(name).toEqual(["Le feu", "Pop art mouse 2"]);
  });
});