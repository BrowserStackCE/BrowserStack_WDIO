const expectChai = require('chai').expect;

describe('iOS Deep Link', () => {
    it('should let me switch between app and Safari', () => {

        const safariBundleId = "com.apple.mobilesafari";
        const nativeAppBundleId = "com.browserstack.Sample-iOS"; // replace this with your app's bundle id
        const Url = "EXAMAPLE";

        // Launch Safari and load  URL
        driver.execute('mobile: launchApp', {bundleId: safariBundleId});
        const search = $("//*[@value='Search or enter website name']");
        search.setValue(Url + '\n');

        // Find and click the Venmo button
        const ButtonSelector = `type == 'XCUIElementTypeButton' && name CONTAINS 'EXAMPLE'`
        const Button = $(`-ios predicate string:${ButtonSelector}`)
        Button.click();
        driver.waitUntil(
            () => Button.isClickable() ? Button.click() : true
         );

        // Perform the rest of your test in the native app
        driver.pause(5000);
        driver.execute('mobile: launchApp', {bundleId: nativeAppBundleId});
    });
});
