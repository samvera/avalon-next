import { expect, test } from "@playwright/test";

test("homepage elements", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL("**/");

  await expect(page.getByRole("heading")).toContainText("Avalon Media System");
  await expect(page.getByRole("main")).toContainText(
    "Avalon Media System is an open source platform for managing and providing access to large collections of digital audio and moving image content.",
  );

  await page.getByRole("link", { name: "Get started" }).click();
  await page.waitForURL("**/getting-started");

  await expect(page.locator("h1")).toContainText("Getting Started");

  await page.goto("/");
  await page.waitForURL("**/");

  await expect(page.getByRole("main")).toContainText("Documentation →");
  await expect(page.getByRole("img", { name: "App screenshot" })).toBeVisible();
});
