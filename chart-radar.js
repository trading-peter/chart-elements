import { LitElement } from 'lit-element/lit-element.js';
import { ChartPropertyMixin } from './chart-property-mixin';
import { ContextMixin } from './context-mixin';
import { ResizeMixin } from './resize-mixin.js';

/**
A radar chart is a way of showing multiple data points and the variation between them.

They are often useful for comparing the points of two or more different data sets.

##### Example

    <chart-radar data="[[data]]"></chart-radar>

    ...

    this.data = {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    };

@group Chart Elements
@element chart-radar
*/
class ChartRadar extends ResizeMixin(ContextMixin(ChartPropertyMixin(LitElement))) {

  constructor() {
    super();
    this.__type = 'radar';
  }

}

window.customElements.define('chart-radar', ChartRadar);
