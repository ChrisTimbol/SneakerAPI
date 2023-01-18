const playwright = require('playwright-aws-lambda');

async function Finishline(products) {
    const url = "https://www.finishline.com/store/sneaker-release-dates"

    const browser = await playwright.launchChromium({
        headless: false,
        chromiumSandbox: false,
    });

    let page = await browser.newPage()

    if (!page.locator("div[class='row releaseProduct  pt-4 pb-3']")) {  // pause if captcha
        await page.pause()
        browser = await playwright.launchChromium({
            headless: false,
            chromiumSandbox: false,
        });
    }

    await page.goto(url)
/*     await page.pause() */
    if(page.getByRole('document', { name: 'Enter your email to be the first to know about the latest drops and sales.' })) {
        await page.getByRole('link', { name: 'close dialog' }).click() //exits popup
    }
    await page.keyboard.press('End', { delay: 1500 });
    await page.keyboard.press('Home', { delay: 1500 });
    await page.keyboard.press('End', { delay: 1500 });
    await page.keyboard.press('Home', { delay: 1500 });
    await page.keyboard.press('End', { delay: 1500 });
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
        productCard['site'] = url
        productCard['product'] = productStyle[i] + " " + productName[i]
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
    Finishline: Finishline,
}