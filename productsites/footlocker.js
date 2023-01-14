const { chromium } = require('playwright');

async function FootLocker() {

    const products = []

    let browser = await chromium.launch({ headless: true, });
    let page = await browser.newPage()
    let url = "https://www.footlocker.com/release-dates"

    // scroll page to make sure we get all products
    await page.goto(url)
    await page.keyboard.press('End');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Home');

    // arrays of locators for each product
    const productDate = await page.locator("span[class='ProductReleaseDate']").allTextContents()
    const productGenderStyles = await page.locator("p[class='ProductGenderStyles ProductGenderStyles--inProductCard']").allTextContents()
    const productName = await page.locator("span[class='ProductName-primary']").allTextContents()
    const productPrice = await page.locator("span[class='ProductPrice']").allTextContents()
    const productLink = await page.locator("a[class='ReleaseProduct-Link']").all()
    const productImage = await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").all()

    for (let i = 0; i < await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").count(); i++) {
        const productCard = {}
        productCard['date'] = productDate[i]
        productCard['GenderStyle'] = productGenderStyles[i]
        productCard['product'] = productName[i]
        productCard['price'] = productPrice[i]
        productCard['link'] = "https://www.footlocker.com" + await productLink[i].getAttribute('href')
        productCard['img'] = await productImage[i].getAttribute('src')
        products.push(productCard)
    }

    browser.close()
    return products
}

module.exports = {
    FootLocker: FootLocker,
}