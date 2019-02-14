/**
 * Listen for the iron-resize event to re-render the chart.
 * @polymer
 * @mixinFunction
 */
export const ResizeMixin = function(superClass) {
  return class extends superClass {

    connectedCallback() {
      super.connectedCallback();
      this._boundOnResize = this._onResize.bind(this);
      window.addEventListener('resize', this._boundOnResize);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener('resize', this._boundOnResize);
    }

    _onResize() {
      this._queue();
    }

    // This is a public method the user can call if they've
    // changed our dimensions with CSS.
    resize() {
      if (this.chart) {
        this.chart.resize();
        this.chart.render(true);
      }
    }
  }
};
