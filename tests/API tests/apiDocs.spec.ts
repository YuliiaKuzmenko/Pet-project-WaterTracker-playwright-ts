import { test, expect, request } from "@playwright/test";
const backendURL: string = "https://tracker-of-water-oqqk.onrender.com/api";

test.describe("API docs", () => {
  
  test("Access to API docs", async ({ request }) => {
    test.setTimeout(60000); 
    const response = await request.get(`${backendURL}/api-docs`);
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("Swagger UI");
  });

  test("No access to invalid API endpoint", async ({ request }) => {
    const response = await request.get(`${backendURL}/api`);
    expect(response.status()).toBe(404);
  });

});

