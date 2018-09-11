import { html } from '@polymer/lit-element';

export const style = html`
  <style>
    :host {
      display: inline-block;
      position: relative;
    }

    :host > div {
      height: 100%;
    }

    #canvas {
      width: 100%;
      height: 100%;
    }
  </style>
`;
