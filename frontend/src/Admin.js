import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Admin.css';

class Admin extends React.Component {
    render() {
        return (
            <div class="form">
            <div class="container">
                <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-10">
            <Form>
            <FormGroup>
              <Label for="exampleEmail">userID</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Identifiant de l'utilisateur" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Country</Label>
              <Input type="textarea" name="password" id="examplePassword" placeholder="Pays de l'utilisateur" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">personInHouse</Label>
              <Input type="select" name="select" id="exampleSelect">
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
              <Label for="exampleSelectMulti">houseSize</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>small</option>
                <option>medium</option>
                <option>big</option>
              </Input>
            </FormGroup>
        
            
        
            <Button>Submit</Button>
          </Form>
          </div>
          </div>
          </div>
          </div>
        );
    }
}

export default Admin;