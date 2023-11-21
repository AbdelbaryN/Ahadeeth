import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';
import {Ahadeeth} from '../pages/alhadeeth';


test('Verify selecting multiple hadith types and verify hadith count', async({page})=>{
    //Login
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
    //Verify selecting multiple hadith types and verify hadith count
    const ahadeeth = new Ahadeeth(page)
    await ahadeeth.verifyNumberOfMatchedResultCount();
});

