import puppeteer from "puppeteer"

async function openWepPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400
    })
    const page = await browser.newPage()

    await page.goto("https://www.google.com")

    await page.screenshot({ path: "screenshot.png" })

    await browser.close()
}
openWepPage()