import { expect, test } from "@playwright/test";

test("home page renders the editorial headline", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /warm editorial pages with a gsap-driven menu drawer/i
    })
  ).toBeVisible();
});
