import React, { Component } from 'react';
import './Barre.css';
import { Button } from 'reactstrap';


class Barre extends Component {
    render() {
        return (
           
                <div class="container">
                <aside class=" barre col-lg-2 d-none d-lg-block">  
                    
                     
                            <div class="button">
                            <Button outline color="danger" block>Autre page</Button>
                            </div>
                     
                    
                    </aside>
                </div>
              
        );
    }
}

export default Barre;