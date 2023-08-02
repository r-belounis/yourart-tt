// Functions helpers for testing responses in Remix
// Code from : https://sergiodxa.com/articles/jest-matchers-for-remix-responses#implementation

function toBeOk(response: Response) {
    let pass = response.ok;
    return {
        pass,
        message() {
            if (pass) return "The response should not be ok.";
            return "The response should be ok.";
        },
    };
}

function toRedirect(response: Response | string, path?: string) {
    // the response could be a string if we are only redirecting
    if (typeof response === "string") {
        return {
            pass: response === path,
            message() {
                if (response === path) {
                    return `The response should not redirect to ${path}`;
                }
                return `The response should redirect to ${path}`;
            },
        };
    }

    let header = response.headers.get("Location");
    let status = response.status;

    let pass = status === 302 && header === path;

    return {
        pass,
        message() {
            if (pass) {
                return `The response should not redirect to ${path}`;
            }
            return `The response should redirect to ${path}`;
        },
    };
}

function toHaveStatus(response: Response, expected: number) {
    let pass = response.status === expected;

    return {
        pass,
        message() {
            if (pass) {
                return `The status code of the response should not be ${expected}.`;
            }
            return `The status code of the response should be ${expected}, it was ${response.status}.`;
        },
    };
}

function toHaveHeader(response: Response, name: string, value?: string) {
    let pass = response.headers.has(name);

    if (!Boolean(value)) {
        return {
            pass,
            message() {
                if (pass) return `It should not have the header ${name}`;
                return `It should have the header ${name}`;
            },
        };
    }

    if (Boolean(value)) {
        pass = response.headers.get(name) === value;
    }

    return {
        pass,
        message() {
            if (pass) {
                return `It should not have the header ${name} with value ${value}, it was ${response.headers.get(
                    name
                )}`;
            }
            return `It should have the header ${name} with value ${value}, it was ${response.headers.get(
                name
            )}`;
        },
    };
}

function toSetACookie(response: Response) {
    let hasSetCookie = response.headers.has("Set-Cookie");

    return {
        pass: hasSetCookie,
        message() {
            if (hasSetCookie) return "Expected the response to not set a cookie.";
            return "Expected the response to set a cookie.";
        },
    };
}

export {
    toBeOk,
    toRedirect,
    toHaveStatus,
    toHaveHeader,
    toSetACookie,
}