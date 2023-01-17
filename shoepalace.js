/* const { chromium } = require('playwright');

(async () => {
let browser = await chromium.launch({ headless: false, });
let page = await browser.newPage()
let palaceurl = "https://www.shoepalace.com/pages/releases"
await page.goto(palaceurl)
const PalaceProducts = []
const productCard = {}
await page.waitForLoadState('networkidle');
await page.keyboard.press('End');
await page.keyboard.press('Home', { delay: 1000 });
await page.keyboard.press('End');



let month = await page.locator("div[class='date fghfg'] > p[class='mon']").allTextContents()
let day = await page.locator(" div[class='date fghfg'] > p[class='day']").allTextContents()
let shoeTitle = await page.locator(" div[class='collectionBlock-image lazyloaded']").getAttribute('title') 
console.log(month)
console.log(day)


})() */