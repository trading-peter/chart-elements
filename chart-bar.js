import { LitElement } from '@polymer/lit-element';
import { ChartPropertyMixin } from './chart-property-mixin';
import { ContextMixin } from './context-mixin';
import { ResizeMixin } from './resize-mixin.js';

/**
A bar chart is a way of showing data as bars.

It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

##### Example

  <chart-bar data="[[data]]"></chart-bar>

  ...

  this.data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220,220,220,0.2)",
        borderColor: "rgba(220,220,220,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151,187,205,0.2)",
        borderColor: "rgba(151,187,205,1)",
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

@group Chart Elements
@element chart-bar
@demo demo/chart-bar.html
*/
class ChartBar extends ResizeMixin(ContextMixin(ChartPropertyMixin(LitElement))) {

  constructor() {
    super();
    this.__type = 'bar';
  }

}

window.customElements.define('chart-bar', ChartBar);
