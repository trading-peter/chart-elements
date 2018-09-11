import { html } from '@polymer/lit-element';
import { style } from './chart-styles.js';

/**
 * Adds basic properties to all chart elements.
 * @polymer
 * @mixinFunction
 */
export const ChartPropertyMixin = function(superClass) {
  return class extends superClass {
    static get properties() {
      return {
        chart: Object,
        data: Object,
        options: Object
      };
    }

    constructor() {
      super();
      this.__hasData = false;
    }

    _render() {
      return html`
        ${this._renderStyle()}
        <div>
          <canvas id="canvas"></canvas>
        </div>
      `;
    }

    _renderStyle() {
      return style;
    }

    _shouldRender(props, changedProps) {
      if ('data' in changedProps || 'options' in changedProps) {
        this._configurationChanged(this.data, this.options);
      }

      if ('chart' in changedProps) {
        this.dispatchEvent(new CustomEvent('chart-changed', { detail: this.chart, bubbles: true, composed: true }));
        return false;
      }

      return true;
    }

    _didRender() {
      if (this.__hasData && this.isConnected) {
        this._queue();
      }
    }

    _configurationChanged(data) {
      if (data.labels && data.datasets) {
        this.__hasData = true;
      } else {
        this.__hasData = false;
      }
    }
  }
};
