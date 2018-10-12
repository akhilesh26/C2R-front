import React, {Component, Fragment} from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Radio } from 'antd';

import DonorForm from './DonorForm'
import ChampForm from './ChampForm'
import VolunteerForm from './VolunteerForm'

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

  renderForm = () => {
    if(this.state.option === 'champ') {
      return (
        <ChampForm />
      )
    } else if(this.state.option === 'volunteer') {
      return (
        <VolunteerForm />
      )
    } else {
      return (
        <DonorForm />
      )
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} className="login-form">
          {this.renderRadioButtons()}
        </Form>
        <hr />
        {this.renderForm()}
      </Fragment>
    );
  }
}

const RegisterFormWraped = Form.create()(RegisterForm);

export default RegisterFormWraped;