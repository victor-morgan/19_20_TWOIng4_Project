import React, { Component } from 'react';
import './Barre.css';
import { Button } from 'reactstrap';


class Barre extends Component {
    render() {
        return (
           
                <div class="container">
                <aside class=" barre col-lg-2 d-none d-lg-block">  
                       
                    <div class="button">
                      <Button outline color="danger" href="/" block>Widgets</Button>
                    </div>
                    <div class="button">
                      <Button outline color="danger" href="/admin" block>Admin</Button>
                    </div>
                         
                </aside>
                </div>
              
        );
    }
}

export default Barre;