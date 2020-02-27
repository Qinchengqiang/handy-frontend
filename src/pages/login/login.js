import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";


// const loginPage = () => {
    

//     return (
//         <div>
//             <div className="container">
//                 <div className="logo">Login to handy</div>
//                 <div className="login-item">
//                     <form className="form form-login">
//                         <div className="form-field">
//                             <div>Email</div>
//                             <input className="form-input" placeholder="Username"></input>
//                         </div>
//                         <div className="form-field">
//                             <div>Password</div>
//                             <input className="form-input" placeholder="Password"></input>
//                         </div>
//                         <div>Forgot password?</div>
//                         <button className="button">Login</button>
                        
//                     </form>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// export default loginPage;

//const { Form, Icon, Input, Button, Checkbox } = antd;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="container">
        <div className="logo">Login to handy</div>
        <div className="login-item">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        
        <Form.Item>
        <div className="options">
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <a className="login-form-forgot" href="">
            Forgot your password?
          </a>
          
          </div>
        </Form.Item>
        <a href="">Register now!</a>
        
      </Form>
      </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;
