import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alhadeeth.net/');
  await page.goto('https://alhadeeth.net/login');
  await page.getByLabel('البريد الإلكتروني').click();
  await page.getByLabel('البريد الإلكتروني').fill('abdo1991466@gmail.com');
  await page.getByLabel('كلمة السر').click();
  await page.getByLabel('كلمة السر').fill('2cQ0@I9W~G%£');
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
  await page.getByTestId('CancelIcon').click();
  await page.getByRole('textbox', { name: 'ابحث عن راوي' }).click();
  await page.getByRole('textbox', { name: 'ابحث عن راوي' }).fill('زينب بنت');
  await expect(page.locator('[id="__next"]')).toContainText('زينب بنت جحش الأسدية(17)');
});