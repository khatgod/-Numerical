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
class Forwardh2 extends Component {
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
    forwardh2(x, h, degree) {
        switch (degree) {
            case 1:
                y = (-this.func(x+(2*h)) + 4*this.func(x+(1*h)) - 3*this.func(x)) / (2*h)
                break;
            case 2:
                y = (-this.func(x+(3*h)) + 4*this.func(x+(2*h)) - 5*this.func(x+(1*h)) + 2*this.func(x)) / Math.pow(h, 2)
                break;
            case 3:
                y = (-3*this.func(x+(4*h)) + 14*this.func(x+(3*h)) - 24*this.func(x+(2*h)) + 18*this.func(x+(1*h)) - 5*this.func(x)) / (2*Math.pow(h, 3))
                break;
            default:
                y = (-2*this.func(x+(5*h)) + 11*this.func(x+(4*h)) - 24*this.func(x+(3*h)) + 26*this.func(x+(2*h)) - 14*this.func(x+(1*h)) + 3*this.func(x)) / Math.pow(h, 4) 
        }
        this.setState({
            showOutputCard: true
        })
    }

    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        alert(X + " = " + expr.eval(scope))
        return expr.eval(scope);        
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
            <h2 style={{color: "black", fontWeight: "bold"}}>Forward Divided-Differences O(h)</h2>
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
                                ()=>this.forwardh2(parseFloat(this.state.x), parseFloat(this.state.h), parseInt(this.state.degree))
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
export default Forwardh2;