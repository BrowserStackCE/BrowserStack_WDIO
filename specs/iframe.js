
describe('iFrame', () => {
    it('should let me find elements within the iFrame', () => {
        browser.url('Example');

        const frame = $('/html/body/div[3]/div/div/iframe[1]');
        frame.waitForDisplayed();
        
        browser.switchToFrame(frame);

        const Button = $('/html/body/div[1]/div/div[1]/div');
        Button.waitForDisplayed();
        Button.click();

        driver.pause(1000);

        browser.switchWindow('Log in to your account');

        expect(browser).toHaveUrlContaining('https://www.example.com/checkoutnow?sessionID=');
    });
})
