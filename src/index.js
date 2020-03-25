import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './screen.scss';
import Bisection from './Root of Equation/Bisection'
import False from './Root of Equation/False_position';
import Onepoint from './Root of Equation/Onepoint';
import Newton from './Root of Equation/Newton-raphson';
import Secant from './Root of Equation/Secant';
import Cramer from './Linear Algebra/Cramer';
import Gauss from './Linear Algebra/Gauss';
import Jordan from './Linear Algebra/Jordan';
import Inverse from './Linear Algebra/Inverse';
import LU from './Linear Algebra/LU';
import Cholesky from './Linear Algebra/Cholesky';
import Jacobi from './Linear Algebra/Jacobi';
import Seidel from './Linear Algebra/Seidel';
import Gradient from './Linear Algebra/Gradient';
import NewtonInterpolate from './Interpolation/Newton';
import Lagrange from './Interpolation/Lagrange';
import Spline from './Interpolation/Spline';
import ForwardH from './Differentiation/Forwardh';
import ForwardH2 from './Differentiation/ForwardH2';
import BackwardH from './Differentiation/Backwardh';
import BackwardH2 from './Differentiation/Backwardh2';
import CentralH from './Differentiation/Centralh';
import CentralH2 from './Differentiation/Centralh2';
import Euler from './ODE/Euler';
import Heun from './ODE/Heun';
import ModifiedEuler from './ODE/Modified_Euler';
import {Layout, Menu, Icon } from 'antd';
//import StarCanvas from './StarfieldCanvas';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout; 
class Index extends React.Component {
  rootSubmenuKeys = ['root_submenu', 'algebra_submenu', 'interpolate_submenu', 'regression_submenu', 'integrate_submenu', 'diff_submenu', 'de_submenu'];

  state = {
    openKeys: [''],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  onChangePage = (props) => {
    //Root of Equation
    if (props.key.localeCompare("menu_bisection") === 0) {
      ReactDOM.render(<Bisection />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_false") === 0) {
      ReactDOM.render(<False />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_onepoint") === 0) {
      ReactDOM.render(<Onepoint />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_newton") === 0) {
      ReactDOM.render(<Newton />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_secant") === 0)  {
      ReactDOM.render(<Secant />, document.getElementById("content"));
    }
    //Linear Algebra
    else if (props.key.localeCompare("menu_cramer") === 0)  {
      ReactDOM.render(<Cramer />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_gauss") === 0)  {
      ReactDOM.render(<Gauss />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_jordan") === 0)  {
      ReactDOM.render(<Jordan />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_inverse") === 0)  {
      ReactDOM.render(<Inverse />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_lu") === 0)  {
      ReactDOM.render(<LU />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_cholesky") === 0)  {
      ReactDOM.render(<Cholesky />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_jacobi") === 0)  {
      ReactDOM.render(<Jacobi />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_seidel") === 0)  {
      ReactDOM.render(<Seidel />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_gradient") === 0)  {
      ReactDOM.render(<Gradient />, document.getElementById("content"));
    }
    //Interpolation
    else if (props.key.localeCompare("menu_divide") === 0)  {
      ReactDOM.render(<NewtonInterpolate />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_lagrange") === 0)  {
      ReactDOM.render(<Lagrange />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_spline") === 0)  {
      ReactDOM.render(<Spline />, document.getElementById("content"));
    }
    //Differentiation
    else if (props.key.localeCompare("menu_forwardh") === 0) {
      ReactDOM.render(<ForwardH />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_backwardh") === 0) {
      ReactDOM.render(<BackwardH />, document.getElementById("content"))
    }
    else if (props.key.localeCompare("menu_centralh") === 0) {
      ReactDOM.render(<CentralH />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_forward2h") === 0) {
      ReactDOM.render(<ForwardH2 />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_backward2h") === 0) {
      ReactDOM.render(<BackwardH2 />, document.getElementById("content"))
    }
    else if (props.key.localeCompare("menu_central2h") === 0) {
      ReactDOM.render(<CentralH2 />, document.getElementById("content"));
    }
    //ODE
    else if (props.key.localeCompare("menu_euler") === 0) {
      ReactDOM.render(<Euler />, document.getElementById("content"));
    }
    else if (props.key.localeCompare("menu_heun") === 0) {
      ReactDOM.render(<Heun />, document.getElementById("content"))
    }
    else if (props.key.localeCompare("menu_modifier") === 0) {
      ReactDOM.render(<ModifiedEuler />, document.getElementById("content"));
    }
}


  render() {
    return(
      <Layout>
        <Header className="header" style={{backgroundColor: "#AD19EC" ,height: "80px"}}>
            <div align = "center">
              <label >
                  &nbsp;&nbsp;&nbsp;Numerical Method
              </label>                    
            </div>
        </Header>
        
        <Layout>
          <Sider width={335} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              style={{ height: '80vh', borderRight: 0, backgroundColor: "#9400D3", overflowY: "scroll" }}
              theme="dark"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              onClick={this.onChangePage}
            >
              <SubMenu key="root_submenu" title={<span >Root of Equation</span>}>
                <Menu.Item key="menu_bisection" >Bisection</Menu.Item>
                <Menu.Item key="menu_false">False Position</Menu.Item>
                <Menu.Item key="menu_onepoint">One-Point Iteration</Menu.Item>
                <Menu.Item key="menu_newton">Newton-Raphson</Menu.Item>
                <Menu.Item key="menu_secant">Secant Method</Menu.Item>
              </SubMenu>
              <SubMenu key="algebra_submenu" title={<span>Linear Algebra</span>}>
                <Menu.Item key="menu_cramer">Cramer's Rule</Menu.Item>
                <Menu.Item key="menu_gauss">Gauss's Elimination</Menu.Item>
                <Menu.Item key="menu_jordan">Gauss Jordan Method</Menu.Item>
                <Menu.Item key="menu_inverse">Matrix Inversion</Menu.Item>
                <Menu.Item key="menu_lu">LU Decomposition</Menu.Item>
                <Menu.Item key="menu_cholesky">Cholesky Decomposition</Menu.Item>
                <Menu.Item key="menu_jacobi">Jacobi Iteration Method</Menu.Item>
                <Menu.Item key="menu_seidel">Gauss Seidel Iteration</Menu.Item>
                <Menu.Item key="menu_gradient">Conjugate Gradient Method</Menu.Item>
              </SubMenu>
              <SubMenu key="interpolate_submenu" title={<span>Interpolation</span>}>
                <Menu.Item key="menu_divide">Newton Divide Difference</Menu.Item>
                <Menu.Item key="menu_lagrange">Lagrange</Menu.Item>
                <Menu.Item key="menu_spline">Spline</Menu.Item>
              </SubMenu>
              <SubMenu key="diff_submenu" title={<span>Differentiation</span>}>
                <Menu.Item key="menu_forwardh">Forward Divided-Differences O(h)</Menu.Item>
                <Menu.Item key="menu_backwardh">Backward Divided-Differences O(h)</Menu.Item>
                <Menu.Item key="menu_centralh">Central Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                <Menu.Item key="menu_forward2h">Forward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                <Menu.Item key="menu_backward2h">Backward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                <Menu.Item key="menu_central2h">Central Divided-Differences O(h{<sup>4</sup>})</Menu.Item>
              </SubMenu>
              <SubMenu key="de_submenu" title={<span>Ordinary Differential Equation</span>}>
                <Menu.Item key="menu_euler">Euler's Method</Menu.Item>
                <Menu.Item key="menu_heun">Heun's Method</Menu.Item>
                <Menu.Item key="menu_modifier">Modifier Euler's Method</Menu.Item>
              </SubMenu>              
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{padding: 24, margin: 0, minHeight: 280,}}>
              <div id="content">
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>      
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));