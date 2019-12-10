import React, { Component } from 'react';
import './Widget.css';

import PieChart from './PieChart.js';
import AreaChart from './AreaChart.js';
import LineChart from './LineChart.js';
import BarChart from './BarChart.js';
import RadialBarChart from './RadialBarChart.js';
import RadarChart from './RadarChart.js';

class Widget extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg"></div>
                    <div class="col-auto">

                   <br></br>

                    <section class="row">
                        <article class="col-auto">
							<div class="case">
								<BarChart/>
							</div>
						</article>
						<br></br>
						<article class="col-auto">
							<div class="case">
								<PieChart/>
							</div>
						</article>
                    </section>

                    <br>
                    </br>

					<section class="row">
                        <article class="col-auto">
							<div class="case">
								<RadarChart/>
							</div>
						</article>
						<br></br>
						<article class="col-auto">
							<div class="case">
								<AreaChart/>
							</div>
						</article>
                    </section>

                    <br>
                    </br>

                    <section class="row">
						<article class="col-auto">
							<div class="case">
								<LineChart/>
							</div>
						</article>
						<br></br>
						<article class="col-auto">
							<div class="case">
								<RadialBarChart/>
							</div>
						</article>					
					</section>

					<br>
                    </br>
                        
                    </div>
                </div>
             </div>

        );
    }
}

export default Widget;