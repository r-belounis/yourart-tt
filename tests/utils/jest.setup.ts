import '@testing-library/jest-dom/extend-expect';
import { expect } from "@jest/globals";
import { fetch, Request, Response, Headers } from "@remix-run/web-fetch";
import { toBeOk, toRedirect, toHaveStatus, toHaveHeader, toSetACookie } from "./jest.helpers";

expect.extend({
    toBeOk,
    toRedirect,
    toHaveStatus,
    toHaveHeader,
    toSetACookie,
});

// Fetch API behavior not working in tests coverage
// See : https://github.com/remix-run/react-router/blob/main/packages/router/__tests__/setup.ts
if (!globalThis.fetch) {
  // Built-in lib.dom.d.ts expects `fetch(Request | string, ...)` but the web
  // fetch API allows a URL so @remix-run/web-fetch defines
  // `fetch(string | URL | Request, ...)`
  // @ts-expect-error
  globalThis.fetch = fetch;
  // Same as above, lib.dom.d.ts doesn't allow a URL to the Request constructor
  // @ts-expect-error
  globalThis.Request = Request;
  // web-std/fetch Response does not currently implement Response.error()
  // @ts-expect-error
  globalThis.Response = Response;
  globalThis.Headers = Headers;
}