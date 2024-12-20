import { expect, test } from "@playwright/test";

import mockFeaturesResponse from "./fixtures/features-response.json";

test("Features and Implementations page returns Features", async ({ page }) => {
  // Mock the API response before navigating
  await page.route("*/**/entries?content_type=feature", async (route) => {
    await route.fulfill({ json: mockFeaturesResponse });
  });

  await page.goto("/features");
  await expect(page.locator("h1")).toContainText(
    "Features and Implementations",
  );
  await expect(page.getByRole("main")).toContainText("Avalon");

  await expect(
    page.getByRole("heading", { name: "Features", exact: true }),
  ).toBeVisible();

  // Test mocked features data:
  const featureList = page.getByTestId("feature-list");
  await expect(featureList).toBeVisible();
  await expect(featureList.locator("li")).toContainText(
    "Flexible access control",
  );

  await expect(
    page.getByRole("heading", { name: "Implementations", exact: true }),
  ).toBeVisible();
});
