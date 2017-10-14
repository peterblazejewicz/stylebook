import { flush, render } from "@stencil/core/testing";

import { App } from './sttylebook-site';

describe('stylebook-site', () => {
  it('should build', () => {
    expect(new App()).toBeTruthy();
  })

  describe('rendering', () => {

    let element;

    beforeEach(async () => {
      element = await render({
        components: [App],
        html: '<stylebook-site></stylebook-site>'
      });
    });

    it('should work without props', async () => {
      await flush(element);
      expect(element.textContent).toEqual('Hello World!');
    })

  });
})
