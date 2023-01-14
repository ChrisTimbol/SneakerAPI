const { chromium } = require('playwright');


async function Champs() {
  let products = []

  let browser = await chromium.launch({ headless: true, });
  let page = await browser.newPage()
  let url = "https://www.champssports.com/release-dates.html"
  await page.goto(url)

  // scroll page to make sure we get all load all dynamic products
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Home');

  const productDate = await page.locator("span[class='ProductReleaseDate']").allTextContents()
  const productGenderStyles = await page.locator("p[class='ProductGenderStyles ProductGenderStyles--inProductCard']").allTextContents()
  const productName = await page.locator("span[class='ProductName-primary']").allTextContents()
  const productPrice = await page.locator("span[class='ProductPrice']").allTextContents()
  const productLink = await page.locator("a[class='ReleaseProduct-Link']").all()
  const productImage = await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").all()


  for (let i = 0; i < await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").count(); i++) {
    const productCard = {}
    productCard['product'] = productName[i]
    productCard['date'] = productDate[i]
    productCard['GenderStyle'] = productGenderStyles[i]
    productCard['price'] = productPrice[i]
    productCard['link'] = "https://www.champssports.com/" + await productLink[i].getAttribute('href')
    productCard['img'] = await productImage[i].getAttribute('src')

    products.push(productCard)

  }
  browser.close()
  return products
}

module.exports = {
  Champs: Champs,
}