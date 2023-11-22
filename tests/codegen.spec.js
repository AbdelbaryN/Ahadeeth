import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alhadeeth.net/');
  await page.goto('https://alhadeeth.net/login');
  await page.getByLabel('البريد الإلكتروني').click();
  await page.getByLabel('البريد الإلكتروني').fill('abdo1991466@gmail.com');
  await page.getByLabel('البريد الإلكتروني').press('Tab');
  await page.getByLabel('كلمة السر').fill('2cQ0@I9W~G%£');
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
  await page.getByTestId('CancelIcon').click();
  await page.getByRole('textbox', { name: '0' }).fill('7031');
  await page.getByRole('textbox', { name: '0' }).press('Enter');
  await page.getByText('7031', { exact: true }).click();
  await expect(page.locator('[id="__next"]')).toContainText('7031');
});