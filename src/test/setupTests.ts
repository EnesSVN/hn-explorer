import { server } from "./server";
import "@testing-library/jest-dom";
import "whatwg-fetch";

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
