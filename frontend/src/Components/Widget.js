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
                    <div class="col-lg-2"></div>
                    <div class="col-lg-10">
                    <section class="row">
                    <article class="col-auto">
                    <div>DASHBOARD</div>
                   <br>
                   </br>
                   <br>
                   </br>
                        </article>
                        </section>


                    <section class="row">
                        <article class="col-auto">
							<div class="case">
								<RadialBarChart/>
							</div>
						</article>
						<article class="col-auto">
							<div class="case">
								<AreaChart/>
							</div>
						</article>
						<article class="col-auto">
							<div class="case">
								<BarChart/>
							</div>
						</article>
                    </section>

                    <br>
                    </br>
                    <br>
                    </br>

                    <section class="row">
						<article class="col-sm">
							<div class="case">
								<figure>
									<figcaption>Night Visions</figcaption>
								</figure>
								<div class="artist">ggzgzrgzrgg</div>
								<div class="count">11 <br></br><br></br> songs</div>
							</div>
						</article>
						<article class="col-sm">
							<div class="case">
								<figure>
									<figcaption>Wax Wings</figcaption>
								</figure>
								<div class="artist">ggzgzrgzrgg</div>
								<div class="count">11 songs</div>
							</div>
						</article>
						<article class="col-sm">
							<div class="case">
								<figure>
									<figcaption>Modern Vampires of th...</figcaption>
								</figure>
								<div class="artist">ggzgzrgzrgg</div>
								<div class="count">12 songs</div>
							</div>
						</article>					
					</section>
                        
                    </div>
                </div>
             </div>
        );
    }
}

export default Widget;