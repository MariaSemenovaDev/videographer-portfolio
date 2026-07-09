import { expect, test } from "@playwright/test";

test("navigation drawer opens, closes, navigates, and locks scroll", async ({
  page
}) => {
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: /open site navigation/i });
  const drawer = page.getByRole("dialog", { name: /selected films, process notes, and contact/i });
  const overlay = page.getByRole("button", { name: /close navigation drawer/i });
  const processLink = page.getByRole("link", { name: /02 process/i });

  await menuButton.click();
  await expect(drawer).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

  await overlay.click();
  await expect(drawer).not.toBeVisible();

  await menuButton.click();
  await processLink.click();
  await expect(page).toHaveURL(/\/process$/);
  await expect(drawer).not.toBeVisible();

  await page.getByRole("button", { name: /open site navigation/i }).click();
  await expect(drawer).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(drawer).not.toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "visible");
  await expect(page.getByRole("button", { name: /open site navigation/i })).toBeFocused();
});
