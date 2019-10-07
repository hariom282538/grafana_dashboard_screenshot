const puppeteer = require('puppeteer');

exports.capture = async function (req, res) {

    let url = req.query.url || "https://localhost/grafana/login", res_data;
    const browser = await puppeteer.launch({ headless: true, args: ['--ignore-certificate-errors --enable-features=NetworkService', '--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const client = await page.target().createCDPSession();
    await client.send('Security.setIgnoreCertificateErrors', { ignore: true });

    // Get the "viewport" of the page, as reported by the page.
    await page.setViewport({ width: 1800, height: 750 })

    try {
        res_data = [{ "type": "success" }];
        await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load        
        await page.type('input[name="username"]', "tempuser");
        await page.type('input[name="password"]', "welcome");
        await page.click('button[type="submit"]');
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.goto('https://localhost/grafana/d/V_jdyOriz/aio_source_trend?panelId=2&fullscreen&orgId=1&from=now-30m&to=now', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: "DLY_TREND.jpeg", type: "jpeg", quality: 100, omitBackground: true, fullPage: true });
        await page.goto('https://localhost/grafana/d/V_jdyOriz/aio_source_trend?panelId=3&fullscreen&orgId=1&from=now-30m&to=now', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: "WKLY_TREND.jpeg", type: "jpeg", quality: 100, omitBackground: true, fullPage: true });
        await page.goto('https://localhost/grafana/d/V_jdyOriz/aio_source_trend?panelId=4&fullscreen&orgId=1&from=now-30m&to=now', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: "MNTHLY_TREND.jpeg", type: "jpeg", quality: 100, omitBackground: true, fullPage: true });
        await browser.close();
        res.send(res_data);
    }
    catch (err) {

        console.log("PPTR Error - handled case", err);
        res_data = [{ "type": "error" }];
        await browser.close();
        res.send(res_data);
    }

}; // global function closing

