import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';

test('Verify login with a registered email and correct password.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    //await page.waitForLoadState('networkidle');
    await login.VerifyWelcomeMessage();
});

test('Verify login with an invalid email format (e.g., missing "@" or domain).', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('WrongEmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWrongEmailError();
});