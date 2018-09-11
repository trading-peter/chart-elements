import { LitElement } from '@polymer/lit-element';
import { ChartPropertyMixin } from './chart-property-mixin';
import { ContextMixin } from './context-mixin';
import { ResizeMixin } from './resize-mixin.js';

/**
A bubble chart is used to display three dimensions of data at the same time.
The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes.
The third dimension is represented by the size of the individual bubbles.
##### Example
    <chart-bubble data="[[data]]"></chart-bubble>
    ...
    this.data = {
		  datasets: [{
				label: "My First dataset",
          		backgroundColor: "rgba(220,220,220,0.2)",
         		borderColor: "rgba(220,220,220,1)",
          		borderWidth: 1,
				data: [
					{
						x: 20,
						y: 30,
						r: 15
					},
					{
						x: 40,
						y: 10,
						r: 10
					}
				]
			}]
    };

@group Chart Elements
@element chart-bubble
*/

class ChartBubble extends ResizeMixin(ContextMixin(ChartPropertyMixin(LitElement))) {

  constructor() {
    super();
    this.__type = 'bubble';
  }

}

window.customElements.define('chart-bubble', ChartBubble);
