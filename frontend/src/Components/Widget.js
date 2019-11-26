import React, { Component } from 'react';
import './Widget.css';

class Widget extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-10">
                    <section class="row">
                    <article class="col-lg-12 col-md-9 col-xs-3">
                    <div>DASHBOARD</div>
                   <br>
                   </br>
                   <br>
                   </br>
                        </article>
                        </section>


                    <section class="row">
                        <article class="col align-self-start">
							<div class="case">
								<figure>
								<figcaption>Native (Deluxe)</figcaption>
								</figure>
								<div>OneRepublic</div>
								<div>17 songs</div>
							</div>
						</article>
						<article class="col align-self-center">
							<div class="case">
								<figure>
									<figcaption>Wax Wings</figcaption>
								</figure>
								<div>Joshua Radin</div>
								<div>11 songs</div>
							</div>
						</article>
						<article class="col align-self-end">
							<div class="case">
								<figure>
									<figcaption>Modern Vampires of th...</figcaption>
								</figure>
								<div>Vampire Weekend</div>
								<div>12 songs</div>
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