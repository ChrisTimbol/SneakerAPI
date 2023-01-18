const { chromium } = require("playwright-core");  
const playwright = require('playwright-aws-lambda'); 

async function Nike(products) {
    const url = "https://www.nike.com/si/launch?s=upcoming"

    const browser = await playwright.launchChromium({
        headless: true,
        chromiumSandbox: false,
    });

    let page = await browser.newPage()

    await page.goto(url)
    await page.keyboard.press('End', {delay: 1500});
    await page.waitForTimeout(500);
    await page.keyboard.press('Home', {delay: 1500});

    const dayDates = await page.locator("p[class='headline-1']").allTextContents()
    const monthDates = await page.locator("p[class='headline-4']").allTextContents()
    const productStyle = await page.locator("h3[class='headline-5']").allTextContents()
    const productName = await page.locator("h6[class='headline-3']").allTextContents()
    const productLink = await page.locator(" a[data-qa='product-card-link']").all()
    const productImage = await page.locator('img[class="image-component mod-image-component u-full-width"]').all()

    for (let i = 0; i < await page.locator('img[class="image-component mod-image-component u-full-width"]').count(); i++) {
        const productCard = {}

        productCard['site'] = url
        productCard['product'] = productStyle[i] + " " +productName[i]
        productCard['date'] = monthDates[i] + " " + dayDates[i]
        productCard['price'] = "Not Available"
        productCard['img'] = await productImage[i].getAttribute('src')
        productCard['link'] = "https://www.nike.com/" + await productLink[i].getAttribute('href')
        products.push(productCard)
    }
    browser.close()
    return products
}

module.exports = {
    Nike: Nike,
} 