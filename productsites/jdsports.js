const { chromium }  = require('playwright-chromium'); 

async function Jdsports(products) {

    const browser = await chromium.launch({
        headless: true,
        chromiumSandbox: false,
    });
    let page = await browser.newPage()
    const url = "https://www.jdsports.com/sneaker-release-dates"

    // scroll page to make sure we get all products
    await page.pause()
    await page.goto(url)
    await page.keyboard.press('End');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Home');

    // arrays of locators for each product
    const productDate = await page.locator("div[class='row releaseProduct  pt-4 pb-3']").all() // selects all locators with locator class name
    const productImage = await page.locator("div[class='row releaseProduct  pt-4 pb-3'] > div[class='column small-5 medium-5 flex-container rowProductImage productImage '] > img").all()
    const productName = await page.locator("div[class='row releaseProduct  pt-4 pb-3'] > div[class='column small-7 medium-5 productInfo pl-medium-4 pt-medium-2'] > h2[class='h4 hide-for-small-only displayName']").allTextContents()
    const productStyle = await page.locator("div[class='row releaseProduct  pt-4 pb-3'] > div[class='column small-7 medium-5 productInfo pl-medium-4 pt-medium-2'] > div[class='muted mb-1']").allTextContents()
    //jdsports does not provide a url or price on release page
    //const productPrice = await page.locator("span[class='ProductPrice']").allTextContents()
    //const productLink = await page.locator("a[class='ReleaseProduct-Link']").all()     


    for (let i = 0; i < await page.locator("div[class='row releaseProduct  pt-4 pb-3'] > div[class='column small-7 medium-5 productInfo pl-medium-4 pt-medium-2'] > h2[class='h4 hide-for-small-only displayName']").count(); i++) {
        const productCard = {}
        productCard['product'] = productStyle[i] + " " + productName[i]
        productCard['site'] = url
        productCard['date'] = await productDate[i].getAttribute('data-releasedate')
        productCard['price'] = "Not Available"
        productCard['img'] = productImage[i] ? await productImage[i].getAttribute('src') : "Not Available"
        productCard['link'] = "Not Available"

        products.push(productCard)
    }

    browser.close()

    return products
}


module.exports = {
    Jdsports: Jdsports,
}