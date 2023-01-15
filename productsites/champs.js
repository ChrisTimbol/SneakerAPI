const { chromium } = require('playwright');


async function Champs() {
  const products = []

  let browser = await chromium.launch({ headless: false, });
  let page = await browser.newPage()
  const url = "https://www.champssports.com/release-dates.html"
  await page.goto(url)
  // if page contains  div[aria-label="Click to verify"]
  // then click it
  // then do puzzle captcha
  
  // scroll page to make sure we get all load all dynamic products
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Home');

  const productDate = await page.locator("span[class='ProductReleaseDate']").allTextContents()
  const productStyle = await page.locator("p[class='ProductGenderStyles ProductGenderStyles--inProductCard']").allTextContents()
  const productName = await page.locator("span[class='ProductName-primary']").allTextContents()
  const productPrice = await page.locator("span[class='ProductPrice']").allTextContents()
  const productLink = await page.locator("a[class='ReleaseProduct-Link']").all()
  const productImage = await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").all()


  for (let i = 0; i < await page.locator("div[class='ReleaseProduct-Image'] > span[class='Image'] > span[class='LazyLoad is-visible'] > img").count(); i++) {
    const productCard = {}
    productCard['site'] = url
    productCard['product'] = productName[i]
    productCard['date'] = productDate[i]
    productCard['style'] = productStyle[i]
    productCard['price'] = productPrice[i]
    productCard['productlink'] = "https://www.champssports.com/" + await productLink[i].getAttribute('href')
    productCard['img'] = await productImage[i].getAttribute('src')

    products.push(productCard)

  }
  browser.close() 

  return products 
}

module.exports = {
  Champs: Champs,
}