import { expect } from "@jest/globals";
import { toBeOk, toRedirect, toHaveStatus, toHaveHeader, toSetACookie } from "./jest.helpers";

expect.extend({
    toBeOk,
    toRedirect,
    toHaveStatus,
    toHaveHeader,
    toSetACookie,
})