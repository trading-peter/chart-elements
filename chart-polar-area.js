import { LitElement } from '@polymer/lit-element';
import { ChartPropertyMixin } from './chart-property-mixin';
import { ContextMixin } from './context-mixin';
import { ResizeMixin } from './resize-mixin.js';


/**
Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.

##### Example

    <chart-polar-area data="{{data}}"></chart-polar-area>

    ...

    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        "Red",
        "Green",
        "Yellow"
      ]
    };

@group Chart Elements
@element chart-polar-area
@demo demo/chart-polar-area.html
*/
class ChartPolarArea extends ResizeMixin(ContextMixin(ChartPropertyMixin(LitElement))) {

  constructor() {
    super();
    this.__type = 'polarArea';
  }

}

window.customElements.define('chart-polar-area', ChartPolarArea);
