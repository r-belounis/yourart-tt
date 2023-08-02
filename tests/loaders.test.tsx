import { loader } from "app/routes/artist_.$artistId";
import { expect, describe, it } from "@jest/globals";

describe("Loader Artists", () => {
  it("should return an object with the fullname of artist", async () => {
    const response = await loader({
      request: new Request("https://storage.googleapis.com/ya-misc/interviews/front/examples/0"),
      params: {},
      context: {},
    });

    let data = await response.json();

    expect(data).toEqual({ artistShort: { fullname: "Philippe Cottin" }});
  });
});