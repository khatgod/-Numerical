import React, { Component } from 'react'
import {Card, Input, Table} from 'antd';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../screen.scss';
import 'antd/dist/antd.css';
import math from 'mathjs';
import Plot from 'react-plotly.js';

const InputStyle = {
    background: "#f58216",
    color: "white", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var dataInTable = []
const columns = [
    {
      title: "Iteration",
      dataIndex: "iteration",
      key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
      title: "Error",
      key: "error",
      dataIndex: "error"
    }
  ];
  const xValues = math.range(-10, 10, 0.5).toArray();
  var fx = " ";
class Onepoint extends Component {
    
    constructor() {
        super();
        this.state = {
            fx: "",
            x0: 0,
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onepoint = this.onepoint.bind(this);
    }
    onepoint(xold) {
        fx = this.state.fx;
        var xnew = 0;
        var epsilon= parseFloat(0.000000);
        var n=0;
        var data  = []
        data['x'] = []
        data['error'] = []

        do{ 
            xnew = this.func(xold);
            epsilon = this.error(xnew, xold)
            data['x'][n] =  xnew.toFixed(6);
            data['error'][n] = Math.abs(epsilon).toFixed(6);
            n++;  
            xold = xnew;

        }while(Math.abs(epsilon)>0.000001);

        this.createTable(data['x'], data['error']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })

        
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    error(xnew, xold) {
        return Math.abs((xnew-xold) / xnew);
    }
    createTable(x, error) {
        dataInTable = []
        for (var i=0 ; i<x.length ; i++) {
            dataInTable.push({
                iteration: i+1,
                x: x[i],
                error: error[i]
            });
        }
    
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
            <h2 style={{color: "black", fontWeight: "bold"}}>One Point Iteration</h2>
                <div>
                    <Card
                    bordered={true}
                    style={{ width: 300, background: "#333", color: "#FFFFFFFF", float:"left"}}
                    onChange={this.handleChange}
                    >
                        <h2>f(x)<h6 style={{color: "white", fontWeight: "bold"}}>EX. 2-E^(x/4)</h6></h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>X<sub>0</sub></h2><Input size="large" name="x0" style={InputStyle}></Input><br/><br/>                     
                        <Button id="submit_button" color="success" onClick= {
                                ()=>this.onepoint(parseFloat(this.state.x0))
                            }>Submit</Button>
                        
                    </Card>
                    {this.state.showGraph &&
                        <Card
                        bordered={true}
                        style={{ width: 500, height:400, border:"2px solid black", background: "#f44aaa6", color: "#FFFFFFFF", float:"right"}}
                        >
                            <Plot
                                data={[
                                {
                                    x: math.range(-10, 10, 0.5).toArray(),
                                    y: xValues.map(function (x) {
                                        return math.compile(fx).eval({x: x})
                                    }),
                                    type: 'scatter',
                                    marker: {color: 'red'},
                                },
                                ]}
                                style={{width: "100%", float:"left", height: "370px"}}
                            />  
                        </Card>                        
                    }
                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: "100%", background: "#6e6e6e", color: "#FFFFFFFF", clear:"both"}}
                        id="outputCard"
                        >
                            <Table columns={columns} bordered={true} dataSource={dataInTable} bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "black"}}
                            ></Table>
                        </Card>
                    }                    
                </div>

                
            </div>
        );
    }
}
export default Onepoint;