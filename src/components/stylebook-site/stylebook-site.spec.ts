import { flush, render } from "@stencil/core/testing";

import { StylebookSite } from './sttylebook-site';

describe('stylebook-site', () => {
  it('should build', () => {
    expect(new StylebookSite()).toBeTruthy();
  })

  describe('rendering', () => {

    let element;

    beforeEach(async () => {
      element = await render({
        components: [StylebookSite],
        html: '<stylebook-site></stylebook-site>'
      });
    });

    it('should work without props', async () => {
      await flush(element);
      expect(element.textContent).toEqual('Stylebook');
    })

  });
})
