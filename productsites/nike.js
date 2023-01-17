const { chromium } = require("playwright-chromium");

/* const awsChromium = require('chrome-aws-lambda'); */

async function Nike() {

    const products = [] // stores all product cards

    const url = "https://www.nike.com/si/launch?s=upcoming"
    let browser = await chromium.launch({ headless: true,  
        chromiumSandbox: false, args: ['--no-sandbox'] });
    let page = await browser.newPage()

    // scroll page to make sure we get all products
    await page.goto(url)
    await page.keyboard.press('End');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Home');

    // arrays of locators for each product
    const dayDates = await page.locator("p[class='headline-1']").allTextContents()
    const monthDates = await page.locator("p[class='headline-4']").allTextContents()
    const productStyle = await page.locator("h3[class='headline-5']").allTextContents()
    const productName = await page.locator("h6[class='headline-3']").allTextContents()
    const productLink = await page.locator(" a[data-qa='product-card-link']").all()
    const productImage = await page.locator('img[class="image-component mod-image-component u-full-width"]').all()

    // create a productCard of extracted data then push onto product arr
    // i=index of each product
    for (let i = 0; i < await page.locator('img[class="image-component mod-image-component u-full-width"]').count(); i++) {
        const productCard = {} // layout data of each individual product\
        productCard['site'] = url
        productCard['product'] = productName[i]
        productCard['date'] = monthDates[i] + " " + dayDates[i]
        productCard['style'] = productStyle[i]
        productCard['price'] = "Not Available"
        productCard['img'] = await productImage[i].getAttribute('src')
        productCard['link'] = "https://www.nike.com/" + await productLink[i].getAttribute('href')

        products.push(productCard)
    }

    browser.close()
 /*    if(!products) return "Error Captcha wall" */
    return products
}

module.exports = {
    Nike: Nike,
} 