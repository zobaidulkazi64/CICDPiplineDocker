import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("GET /", () => {
  it("responds with text Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello World");
  });
});

describe("GET /test", () => {
  it("responds with text Hello, Zobaidul Kazi", async () => {
    const res = await request(app).get("/test");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, Zobaidul Kazi");
  });
});
