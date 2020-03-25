import React, { Component } from 'react'
import {Card, Input, Table} from 'antd';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../screen.scss';
import 'antd/dist/antd.css';
const InputStyle = {
    background: "#f58216",
    color: "white", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var x = [], y = [], tableTag = []

class Newton extends Component {
    
    constructor() {
        super();
        this.state = {
            nPoints: 0,
            X: 0,
            showInputForm : true,
            showInputButton: true,
            showTableInput: false,
            showTableButton: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.newton_difference = this.newton_difference.bind(this);
    
    }

  
    newton_difference(n) {

      
    }

    createTableInput(n) {
        for (var i=1 ; i<=n ; i++) {
            x.push(<Input style={{
                width: "100%",
                height: "50%", 
                backgroundColor:"black", 
                marginInlineEnd: "5%", 
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }}
            id={"x"+i} key={"x"+i} />);
            y.push(<Input style={{
                width: "100%",
                height: "50%", 
                backgroundColor:"black", 
                marginInlineEnd: "5%", 
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }} 
            id={"y"+i} key={"y"+i} />);   
            tableTag.push({
                no: i,
                x: x[i-1],
                y: y[i-1]
            });
        }


        this.setState({
            showInputForm: false,
            showInputButton: false,
            showTableInput: true,
            showTableButton: true
        })

        

    
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
            <h2 style={{color: "black", fontWeight: "bold"}}>Spline Interpolation</h2>
                <div>
                    <Card
                      bordered={true}
                      style={{ width: 450, background: "#333", color: "#FFFFFFFF", float:"left"}}
                      onChange={this.handleChange}
                    >
                        {this.state.showTableInput && 
                        <div>
                            <Table columns={columns} dataSource={tableTag} pagination={false} bordered={true} bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "white" , overflowY: "scroll", minWidth: 120, maxHeight: 300}}>
                            
                            </Table>
                        </div>}
                        
                        {this.state.showInputForm && 
                            <div>
                                <h2>Number of points(n)</h2><Input size="large" name="nPoints" style={InputStyle}></Input>
                                <h2>X</h2><Input size="large" name="X" style={InputStyle}></Input>
                            </div> 
                        }
                        <br></br>
                        {this.state.showInputButton && 
                            <Button 
                                id="dimention_button"
                                color="success" onClick= {
                                ()=>{this.createTableInput(parseInt(this.state.nPoints))}
                                }>Submit<br></br>
                            </Button>
                        }
                        {this.state.showTableButton && 
                            <Button 
                                id="matrix_button"
                                color="success"  
                                onClick={()=>this.newton_difference(parseInt(this.state.nPoints))}>
                                Submit
                            </Button>
                        }
                        
                    </Card>
                    

                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: "100%", background: "#6e6e6e", color: "#FFFFFFFF", clear:"both"}}
                        id="outputCard"
                        >
                            
                        </Card>
                    }   

                   
                </div>

                
            </div>
        );
    }
}
export default Newton;



