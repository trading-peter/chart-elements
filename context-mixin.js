/**
 * Base connection between the chart element and the chart.js library.
 * @polymer
 * @mixinFunction
 */
export const ContextMixin = function(superClass) {
  return class extends superClass {
    _measure(cb) {
      function measure() {
        if (this.offsetHeight) {
          cb(true);
        } else {
          cb(false);
        }
      }
      requestAnimationFrame(measure.bind(this));
    }

    _queue() {
      if (this.__hasData) {
        this._measure(hasHeight => {
          if (hasHeight) {
            this.updateChart();
          }
        });
      }
    }

    updateChart() {

      setTimeout(() => {
        if (this.chart) {

          this.chart.stop();
          Object.assign(this.chart.data, this.data);
          this.chart.update();
          this.resize();

        } else {

          setTimeout(() => {
            if (this.__hasData) {
              this.chart = new Chart(this.ctx, {
                type: this.__type,
                data: this.data,
                options: this.options
              });
            }
          }, 0);

        }

      }, 0);

    }

    connectedCallback() {
      super.connectedCallback();
      this.updateComplete.then(() => {
        this.ctx = this.shadowRoot.querySelector('#canvas').getContext('2d');
        this._queue();
      });
    }
  }
};
