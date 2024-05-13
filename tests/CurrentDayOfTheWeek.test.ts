import { expect, test } from '@playwright/test';

test.describe('The current day of the week', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      const mockedDate = new Date('2024-05-14');
      window.Date = function () {
        return mockedDate;
      };
    });
    await page.goto('/');
  });
  test.describe('when the locale is set to English', () => {
    test.use({
      locale: 'en',
    });
    test('should display in English', async ({ page }) => {
      const text = page.getByText('Today is Tuesday.');
      await expect(text).toBeVisible();
    });
  });
  test.describe('when the locale is set to Polish', () => {
    test.use({
      locale: 'pl',
    });
    test('should display in Polish', async ({ page }) => {
      const text = page.getByText('Dziś jest wtorek.');
      await expect(text).toBeVisible();
    });
  });
});
