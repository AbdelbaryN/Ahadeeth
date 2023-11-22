const { expect } = require("@playwright/test")

exports.Ahadeeth = class Ahadeeth {
    constructor(page) {
        this.page = page;
        this.qudsiFilterCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'قدسي(424)' }).getByRole('checkbox');
        this.maqtueFilterCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'مقطوع(92)' }).getByRole('checkbox');
        this.noOfMatchedAhadeeth = page.locator('[id="__next"]').getByText('عدد الأحاديث المطابقة للبحث : 516');
        this.noOfMatchedAhadeethWithBooks = page.locator('[id="__next"]').getByText('عدد الأحاديث المطابقة للبحث : 12,398');
        this.noOfQudsiAhadeeth = page.locator('[id="__next"]').getByText('(424)');
        this.noOfMaqtueAhadeeth = page.locator('[id="__next"]').getByText('(92)');
        this.sahihAlbukhariiCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'صحيح البخاري(7,031)' }).getByRole('checkbox');
        this.sahihMuslimCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'صحيح مسلم(5,367)' }).getByRole('checkbox');
        this.noOfsahihAlbukharii = page.locator('[id="__next"]').getByText('(7,031)');
        this.noOfsahihMuslim = page.locator('[id="__next"]').getByText('(5,367)');
        this.copyLinkIcon = page.locator('.MuiBox-root > button').first();
        this.linkedCopiedSuccessMsg = page.locator('[id="__next"]').getByRole('alert');
        this.AbuHoriraCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'أبو هريرة الدوسي(4,440)' }).getByRole('checkbox');
        this.MohamedAlzuhriiCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'محمد بن شهاب الزهري(886)' }).getByRole('checkbox');
        this.AbuHoriraSelector = '#__next > div > div.MuiBox-root.muirtl-oe05iq > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-9.muirtl-1xd5sck > div > div.MuiBox-root.muirtl-pridvr > div:nth-child(3) > div:nth-child(2) > div.MuiBox-root.muirtl-j0jsvd > p > span.MuiTypography-root.MuiTypography-body1.muirtl-1ztrtr';
        this.AlzuhriiSelector = '#__next > div > div.MuiBox-root.muirtl-oe05iq > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-9.muirtl-1xd5sck > div > div.MuiBox-root.muirtl-pridvr > div:nth-child(3) > div:nth-child(2) > div.MuiBox-root.muirtl-j0jsvd > p > span.MuiTypography-root.MuiTypography-body1.muirtl-e31te7';
        this.searchWithHadithNumbertxt = page.getByRole('textbox', { name: '0' });
        this.hadithNum = page.locator('[id="__next"]');
    }

    async verifyNumberOfMatchedResultCount() {
        await this.qudsiFilterCheckbox.check();
        await this.maqtueFilterCheckbox.check();
        const textAfterExtraction = await this.noOfMatchedAhadeeth.textContent();
        const qudsiTextAfterExtraction = await this.noOfQudsiAhadeeth.textContent();
        const maqtueTextAfterExtraction = await this.noOfMaqtueAhadeeth.textContent();
        await expect(this.noOfMatchedAhadeeth).toHaveText('عدد الأحاديث المطابقة للبحث : 516');
        // Declare a variable to store the extracted number
        let extractedNumberFromMatchedAhadeeth;
        let extractedNumberFromQudsi;
        let extractedNumberFromMaqtue;
        const match = textAfterExtraction.match(/\d+/);
        const match1 = qudsiTextAfterExtraction.match(/\d+/);
        const match2 = maqtueTextAfterExtraction.match(/\d+/);
        if (match, match1, match2) {
            // Extracted number as a string
            const extractedNumberString = match[0];
            const extractedNumberString1 = match1[0];
            const extractedNumberString2 = match2[0];

            // Convert the string to a number
            extractedNumberFromMatchedAhadeeth = parseInt(extractedNumberString, 10);
            extractedNumberFromQudsi = parseInt(extractedNumberString1, 10);
            extractedNumberFromMaqtue = parseInt(extractedNumberString2, 10);

            // Log the extracted number
            console.log('Extracted Number:', extractedNumberFromMatchedAhadeeth);
        } else {
            console.log('No number found in the text.');
        }

        console.log(extractedNumberFromMatchedAhadeeth);
        console.log(extractedNumberFromQudsi);
        console.log(extractedNumberFromMaqtue);

        if (extractedNumberFromMatchedAhadeeth == extractedNumberFromQudsi + extractedNumberFromMaqtue) {
            console.log("passed")
        } else {
            console.log("failed")
        }
    }

    async verifyCopyIconExists() {
        await this.sahihAlbukhariiCheckbox.check();
        await this.copyLinkIcon.click();
        this.linkedCopiedSuccessMsg.waitFor();
        expect(this.linkedCopiedSuccessMsg).toContainText('تم نسخ الرابط للمشاركة');
    }

    async verifyNumberOfMatchedResultCountWithBooks() {
        await this.sahihAlbukhariiCheckbox.check();
        await this.sahihMuslimCheckbox.check();
        const textAfterExtraction = await this.noOfMatchedAhadeethWithBooks.textContent();
        const BukariiAfterExtraction = await this.noOfsahihAlbukharii.textContent();
        const muslimTextAfterExtraction = await this.noOfsahihMuslim.textContent();
        await expect(this.noOfMatchedAhadeethWithBooks).toHaveText('عدد الأحاديث المطابقة للبحث : 12,398');
        let extractedNumberFromMatchedAhadeeth;
        let extractedNumberFromBukarii;
        let extractedNumberFromMuslim;
        const textWithoutCommas = textAfterExtraction.replace(/,/g, '');
        const bukariiTextWithoutCommas = BukariiAfterExtraction.replace(/,/g, '');
        const muslimTextWithoutCommas = muslimTextAfterExtraction.replace(/,/g, '');
        const match = textWithoutCommas.match(/\d+/);
        const match1 = bukariiTextWithoutCommas.match(/\d+/);
        const match2 = muslimTextWithoutCommas.match(/\d+/);
        if (match, match1, match2) {
            // Extracted number as a string
            const extractedNumberString = match[0];
            const extractedNumberString1 = match1[0];
            const extractedNumberString2 = match2[0];

            // Convert the string to a number
            extractedNumberFromMatchedAhadeeth = parseInt(extractedNumberString, 10);
            extractedNumberFromBukarii = parseInt(extractedNumberString1, 10);
            extractedNumberFromMuslim = parseInt(extractedNumberString2, 10);

            // Log the extracted number
            console.log('Extracted Number:', extractedNumberFromMatchedAhadeeth);
        } else {
            console.log('No number found in the text.');
        }

        console.log(extractedNumberFromMatchedAhadeeth);
        console.log(extractedNumberFromBukarii);
        console.log(extractedNumberFromMuslim);

        if (extractedNumberFromMatchedAhadeeth == extractedNumberFromBukarii + extractedNumberFromMuslim) {
            console.log("passed")
        } else {
            console.log("failed")
        }

    }


    async getElementColor(selector) {
        return await this.page.evaluate((selector) => {
          const element = document.querySelector(selector);
          const computedStyle = getComputedStyle(element);
          return computedStyle.color;
        }, selector);
      }


    async VerifyDifferentNarratorColors() {
        await this.AbuHoriraCheckbox.check();
        await this.MohamedAlzuhriiCheckbox.check();

        const abuHorira = await this.getElementColor(this.AbuHoriraSelector);

        const Alzuhrii = await this.getElementColor(this.AlzuhriiSelector);

        // Compare the colors of the two elements
        if (abuHorira !== Alzuhrii) {
            console.log('First Color is ', abuHorira);
            console.log('Second Color is ', Alzuhrii);
            console.log('The colors are different.');
        } else {
            console.log('First Color is ', abuHorira);
            console.log('Second Color is ', Alzuhrii);
            console.log('The colors are the same.');
        }


    }

    async VerifyHadithNumber(){
        await this.searchWithHadithNumbertxt.fill('7031');
        await this.searchWithHadithNumbertxt.press('Enter');
        expect(this.hadithNum).toContainText('7031');
    }
}