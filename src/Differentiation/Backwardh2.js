import React, {Component} from 'react';
import {Card, Input} from 'antd';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../screen.scss';
import 'antd/dist/antd.css';
import math from 'mathjs';

const InputStyle = {
    background: "#f58216",
    color: "white", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var y;
class Backwardh2 extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            x: 0,
            h: 0,
            degree: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    backwardh2(x, h, degree) {
        switch (degree) {
            case 1:
                y = (3*this.func(x) - 4*this.func(x-(1*h)) + this.func(x-(2*h))) / (2*h)
                break;
            case 2:
                y = (2*this.func(x) - 5*this.func(x-(1*h)) + 4*this.func(x-(2*h)) - this.func(x-(3*h))) / Math.pow(h, 2)
                break;
            case 3:
                y = (5*this.func(x) - 18*this.func(x-(1*h)) + 24*this.func(x-(2*h)) - 14*this.func(x-(3*h)) - this.func(x-(3*h))) / (2*Math.pow(h, 3))
                break;
            default:
                y = (3*this.func(x) - 14*this.func(x-(1*h)) + 26*this.func(x-(2*h)) - 24*this.func(x-(3*h)) + 11*this.func(x-(4*h)) - 2*this.func(x-(5*h))) / Math.pow(h, 4) 
        }
        this.setState({
            showOutputCard: true
        })
    }

    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
            <h2 style={{color: "black", fontWeight: "bold"}}>Backward Divided-Differences O(h<sup>2</sup>)</h2>
                <div style={{float:"left"}}>
                    <Card
                    bordered={true}
                    style={{ width: 300, background: "#333", color: "#FFFFFFFF", float:"left"}}
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>Order derivative</h2><Input size="large" name="degree" style={InputStyle}></Input>
                        <h2>X</h2><Input size="large" name="x" style={InputStyle}></Input>
                        <h2>H</h2><Input size="large" name="h" style={InputStyle}></Input><br/><br/>
                        <Button id="submit_button" color="success" onClick= {
                                ()=>this.backwardh2(parseFloat(this.state.x), parseFloat(this.state.h), parseInt(this.state.degree))
                            }>Submit</Button>
                        
                    </Card>     
                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: "100%", background: "#6e6e6e", color: "#FFFFFFFF", clear:"both"}}
                        id="outputCard"
                        >
                            <p style={{fontSize: "24px", fontWeight: "bold"}}>
                                Result = {y}<br/>
                            </p>
                        </Card>
                    }              
                </div>                
            </div>
        );
    }
}
export default Backwardh2;