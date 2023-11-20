import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';

test('Verify login with a registered email and correct password.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
});

test('Verify login with an invalid email format (e.g., missing "@" or domain).', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('WrongEmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWrongInputError();
});

test('Verify login with an empty email field.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('', '2cQ0@I9W~G%£');
    await login.VerifyEmptyFieldError();
});

test('Verify login with an empty password field.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '');
    await login.VerifyEmptyFieldError();
});

test('Verify login with a valid email with an incorrect password.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '1234');
    await login.VerifyWrongInputError();
});

test('Login with an email that does not exist in the system.', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('test@test.com', '2cQ0@I9W~G%£');
    await login.VerifyWrongInputError();
});