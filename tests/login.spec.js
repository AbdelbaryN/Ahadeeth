import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';

test('test', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');

});