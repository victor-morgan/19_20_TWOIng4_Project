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
					</article>
                    	
                    </section>

					<br>
                   </br>
                   <br>
                   </br>


                    <section class="row">
                        <article class="col-auto">
							<div class="case">
								Pollution de l'air
								<BarChart/>
							</div>
						</article>
						<article class="col-auto">
							<div class="case">
								Jours d'alerte pollution
								<PieChart/>
							</div>
						</article>
                    </section>

                    <br>
                    </br>

					<section class="row">
                        <article class="col-auto">
							<div class="case">
								Taux d'humidité par région (en %)
								<RadarChart/>
							</div>
						</article>
						<article class="col-auto">
							<div class="case">
								Moyenne de taux d'humidité (en %)
								<AreaChart/>
							</div>
						</article>
                    </section>

                    <br>
                    </br>

                    <section class="row">
						<article class="col-auto">
							<div class="case">
								Température moyenne (en °C)
								<LineChart/>
							</div>
						</article>
						<article class="col-auto">
							<div class="case">
								Jours par température en 2018
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