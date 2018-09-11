import { LitElement } from '@polymer/lit-element';
import { ChartPropertyMixin } from './chart-property-mixin';
import { ContextMixin } from './context-mixin';
import { ResizeMixin } from './resize-mixin.js';

/**
Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows a the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

Pie and doughnut charts in are effectively the same class in Chart.js, but have one different default value - their percentageInnerCutout. This equates what percentage of the inner should be cut out. This defaults to 0 for pie charts, and 50 for doughnuts.

They are also registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.

##### Example

    <chart-pie data="[[data]]"></chart-pie>

    ...

    this.data = {
      labels: [
        "Red",
        "Green",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

@group Chart Elements
@element chart-pie
@demo demo/chart-pie.html
*/
class ChartPie extends ResizeMixin(ContextMixin(ChartPropertyMixin(LitElement))) {

  constructor() {
    super();
    this.__type = 'pie';
  }

}

window.customElements.define('chart-pie', ChartPie);
