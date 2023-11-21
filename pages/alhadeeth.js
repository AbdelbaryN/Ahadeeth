const { expect } = require("@playwright/test")

exports.Ahadeeth = class Ahadeeth {
    constructor(page) {
        this.page = page;
        this.qudsiFilterCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'قدسي(424)' }).getByRole('checkbox');
        this.maqtueFilterCheckbox = page.locator('[id="__next"] span').filter({ hasText: 'مقطوع(92)' }).getByRole('checkbox');
        this.noOfMatchedAhadeeth = page.locator('[id="__next"]').getByText('عدد الأحاديث المطابقة للبحث : 516');
        this.noOfQudsiAhadeeth = page.locator('[id="__next"]').getByText('(424)');
        this.noOfMaqtueAhadeeth = page.locator('[id="__next"]').getByText('(92)');
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
}