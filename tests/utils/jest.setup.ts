
import '@testing-library/jest-dom/extend-expect';
import { expect } from "@jest/globals";
import { fetch, Request, Response } from "@remix-run/web-fetch";
import { toBeOk, toRedirect, toHaveStatus, toHaveHeader, toSetACookie } from "./jest.helpers";

expect.extend({
    toBeOk,
    toRedirect,
    toHaveStatus,
    toHaveHeader,
    toSetACookie,
});

// Added Response behavior not working in tests coverage
// See : https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4
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
}