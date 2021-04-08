const puppeteer = require('puppeteer');
let operte=async(t) => {

    // 开启 browser
   const browserFetcher = puppeteer.createBrowserFetcher();
//    const revisionInfo = await browserFetcher.download('533271');  //指定版本
    const vesion= await browserFetcher.localRevisions()
    console.log(vesion)
    let browser = await puppeteer.launch({
        // executablePath: revisionInfo.executablePath,
        headless: false,
        defaultViewport: {
            height: 1080,
            width: 1920
        }
    });
    // 新增分页
    let page = await browser.newPage();
    // 到自己的网站
    await page.goto(`${t}`);

     // 等待订阅按钮出现
    //  await page.waitForSelector("button[class='subscribe-button pill-button']");
    //  page.type('#mytextarea', 'Hello', { delay: 100 }); // 立即输入
    //  page.type('#mytextarea', 'World', { delay: 100 }); // 输入变慢，像一个用户
    //  // 点击订阅按钮
    //  await page.click("button[class='subscribe-button pill-button']");
    //   关闭标签页
    // page.close()
    // 关闭浏览器
    // await browser.close();
}

let arr=[
    'https://www.baidu.com/',
    // 'https://cn.bing.com/search?q=b%E6%A1%88&PC=U316&FORM=CHROMN',
]
arr.forEach(t => {
    operte(t)
});