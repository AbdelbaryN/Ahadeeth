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

test('Verify that the share icon appears only if a filter is applied or a search is initiated', async({page})=>{
    //Login
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
    //Verify that the share icon appears only if a filter is applied or a search is initiated
    const ahadeeth = new Ahadeeth(page)
    await ahadeeth.verifyCopyIconExists();
});

test('Verify selecting multiple books and verify hadith count', async({page})=>{
    //Login
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
    //Verify selecting multiple hadith types and verify hadith count
    const ahadeeth = new Ahadeeth(page)
    await ahadeeth.verifyNumberOfMatchedResultCountWithBooks();
});

test('Verify that while filtering by narrators, each narrator is displayed in a different color', async({page})=>{
    //Login
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
    //Verify that while filtering by narrators, each narrator is displayed in a different color
    const ahadeeth = new Ahadeeth(page)
    await ahadeeth.VerifyDifferentNarratorColors();
});


test('Verify searching the hadith by its number', async({page})=>{
    //Login
    const login = new LoginPage(page)
    await login.gotoLogin();
    await login.Login('abdo1991466@gmail.com', '2cQ0@I9W~G%£');
    await login.VerifyWelcomeMessage();
    //Verify searching the hadith by its number
    const ahadeeth = new Ahadeeth(page)
    await ahadeeth.VerifyHadithNumber();
});