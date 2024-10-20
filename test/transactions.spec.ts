import { afterAll, beforeAll, it, describe } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions Routes", () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a new transaction", async () => {
    const response = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
    console.log(response.headers);
  });
});
