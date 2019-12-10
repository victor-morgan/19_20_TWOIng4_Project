import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Admin.css';
const axios = require('axios');

class Admin extends React.Component {

  constructor(test) {
    super(test);
    this.state = {
      country: "",
      number: "",
      size: "",
    };
    this.NvCountry = this.NvCountry.bind(this);
    this.NvNumber = this.NvNumber.bind(this);
    this.NvSize = this.NvSize.bind(this);
    this.submit = this.submit.bind(this);
  }

  NvCountry(event) {this.setState({country : event.target.value});}
  NvNumber(event) {this.setState({number : event.target.value});}
  NvSize(event) {this.setState({size : event.target.value});}
  submit() {
    axios({
      method : 'PUT',
      url : 'http://localhost:3000/users',
      body : [this.state.country, this.state.number, this.state.size]
    })
  }

    render() {
        return (
            <div class="form">
            <div class="container">
                <div class="row">
                <div class="col-lg-10">
            <Form onSubmit={this.submit}>
            <FormGroup>
              <Label for="id">Identifiant de l'utilisateur</Label>
              <Input type="textarea" name="ID" id="id"/>
            </FormGroup>
            <FormGroup>
              <Label for="location">Pays de résidence</Label>
              <Input type="textarea" name="location" value={this.state.country} onChange={this.NvCountry}/>
            </FormGroup>
            <FormGroup>
              <Label for="personsInHouse">Nombre d'habitants de l'habitation</Label>
              <Input type="select" name="personsInHouse" id="personsInHouse" value={this.state.number} onChange={this.NvNumber}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="houseSize">Taille de la maison</Label>
              <Input type="select" name="houseSize" value={this.state.size} onChange={this.NvSize} id="houseSize">
                <option>small</option>
                <option>medium</option>
                <option>big</option>
              </Input>
            </FormGroup>
        
            
        
            <Button type="submit">Submit</Button>
          </Form>
          </div>
          </div>
          </div>
          </div>

        );
    }

}

export default Admin;