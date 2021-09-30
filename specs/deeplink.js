const expectChai = require('chai').expect;

describe('Deep Link', () => {
    it('should let me switch between app and browser', () => {

        const appPackage = driver.getCurrentPackage();
        const appActivity = driver.getCurrentActivity();
        const chromePackage = "com.android.chrome";
        const chromeActivity = "com.google.android.apps.chrome.Main";
        const wfUrl = "Example";

        // Launch Chrome app, switch to its context, and load  URL
        driver.startActivity(chromePackage, chromeActivity);
        driver.waitUntil(
            () => driver.getContexts().length > 1
        )
        driver.switchContext('WEBVIEW_chrome');
        driver.url(wfUrl);

        // Switch to iframe Optional
        const frame = $('/html/body/div[3]/div/div/iframe[1]');
        frame.waitForExist({timeout: 5000, timeoutMsg: 'expected iframe to appear'});
        browser.switchToFrame(frame);

        // Click button within iframe
        const Button = $('/html/body/div[1]/div/div[1]/div');
        Button.click();
        
        var wfText = $('android=new UiSelector().text("wf").className("android.widget.TextView")');
        // Perform the rest of your test in the native app
        driver.pause(3000);
        driver.startActivity(appPackage, appActivity);
        expectChai(driver.getCurrentActivity()).to.equal(appActivity);
    });
});
