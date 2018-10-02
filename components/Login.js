import LoginForm from './forms/LoginForm';

import { Modal, Button } from 'antd';


class Login extends React.Component {
    state = {
        loading: false,
        visible: false,
      }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>
              Login
            </Button>
            <Modal
              visible={visible}
              title="Title"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              maskClosable={false}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
              <LoginForm/>
            </Modal>
          </div>
        );
      }
}

export default Login;