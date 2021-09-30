describe('GeoLocation', () => {
  it('should load German version of button', () => {
      browser.url('EXAMPLE');

      const frame = $('/html/body/div[3]/div/div/iframe[1]');
      frame.waitForDisplayed();

      browser.switchToFrame(frame);

      const message = $('.button-tagline');
 
      expect(message).toHaveText('Überall schnell und sicher bezahlen');
  });
})
