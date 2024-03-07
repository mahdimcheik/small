import supertest from "supertest";
import app from "./app.js";
//use the supertest object as our API
const api = supertest(app);

test("GET call", async () => {
  await api
    .get("/users")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
describe("GET /users", () => {
  const email = "mahdi.mcheik@hotmail.fr";
  it("should return all users", async () => {
    await api
      .get(`/users`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("GET /users", () => {
  const email = "mahdi.mcheik@hotmail.fr";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haGRpLm1jaGVpa0Bob3RtYWlsLmZyIiwiZmlyc3RuYW1lIjoiTWFoZGkiLCJsYXN0bmFtZSI6Ik1jaGVpayIsImlhdCI6MTcwOTg0NjE0MSwiZXhwIjoxNzA5ODgyMTQxfQ.FOd2U2PMuIiCU3jXZcqyjf9VcPWAqTD4tJZqc3brSQE";
  it("should return all users", async () => {
    await api
      .get(`/users/${email}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200);
    // .expect("Content-Type", /application\/json/);
  });
});
