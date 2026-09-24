const { test, expect } = require('@playwright/test');

test('verify Playwright website title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});