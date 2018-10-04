import React, {Component, Fragment} from 'react';
import { Modal, Button } from 'antd';

import RegisterForm from './forms/RegisterForm';

class Register extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <Fragment>
        <Modal
          visible={this.props.visibleRegister}
          title="Register to Connect2Roots" 
          onCancel={this.props.handleRegisterMenu}
          maskClosable={false}
          footer={false}
        >
          <RegisterForm />
        </Modal>
      </Fragment>
    );
  }
}


export default Register;