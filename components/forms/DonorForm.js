import React, {Component, Fragment} from 'react';
import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';

const FormItem = Form.Item;

class DonorForm extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
       <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your Phone Number.' }],
          })(
            <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Phone Numer" />
          )}
        </FormItem>

        <FormItem >
          <div style={{display:'flex', flexDirection: 'column'}}>
            
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>

          </div>
          

        </FormItem>

      </Form>
    );
  }
}

const DonorFormWraped = Form.create()(DonorForm);

export default DonorFormWraped;