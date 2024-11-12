import puppeteer from "puppeteer"

async function openWepPage(url, searchQuery) {
    try {
        const browser = await puppeteer.launch({headless: false, slowMo:100, })
        const page = await browser.newPage()
        await page.setViewport({width: 1080, height: 1024});
        await page.goto(url)
        await page.focus('input[id="searchboxinput"]')
        await page.keyboard.type(searchQuery)
        await page.keyboard.press("Enter")

        setTimeout(async () => {
            await browser.close()

        },8000)       

        
    } catch (error) {
        console.log("Error: ", error)
    }
}

const url = "https://www.google.com/maps"

openWepPage(url, "Blvd. 18 Sur 5944, puebla")