import React, {Component, Fragment} from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class RegisterForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      option: 'donor'
    }
  }

  handleRadioButtonClick = (event) => {    
    this.setState({
      option: event.target.value
    })
  }

  renderRadioButtons = () => (
    <RadioGroup name="radiogroup" defaultValue={this.state.option} onChange={this.handleRadioButtonClick}>
      <Radio value={'donor'}>Donor</Radio>
      <Radio value={'volunteer'}>Volunteer</Radio>
      <Radio value={'champ'}>Champ</Radio>
    </RadioGroup>
  )

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
        {this.renderRadioButtons()}
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

const RegisterFormWraped = Form.create()(RegisterForm);

export default RegisterFormWraped;