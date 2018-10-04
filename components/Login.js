import React, {Component, Fragment} from 'react';

import LoginForm from './forms/LoginForm';
import { Modal, Button } from 'antd';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      visible: true
    }
  }   
    
  render() {
    return (
      <Fragment>
        <Modal
          visible={this.props.visibleLogin}
          title="Login to Connect2Roots"
          onCancel={this.props.handleLoginMenu}
          maskClosable={false}
          footer={false}
        >
          <LoginForm/>
        </Modal>
      </Fragment>
    );
  }
}

export default Login;