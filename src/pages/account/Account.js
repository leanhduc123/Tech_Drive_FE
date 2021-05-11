import React from 'react';
import '../../styles/account.scss';
import userServices from './../../services/users';
import { alertText } from 'components/common/Alert';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePass: false,
      cPassword: '',
      newPassword: '',
      rnewPassword: '',
      closeModal: props.closeModal,
    };
  }
  changePass = () => {
    if (this.state.newPassword != this.state.rnewPassword) alertText('Please type two same password!');
    userServices
      .changePass({
        email: localStorage.email,
        current_password: this.state.cPassword,
        new_password: this.state.newPassword,
      })
      .then(() => {
        this.props.closeModal();
      });
  };
  render() {
    return (
      <>
        <div style={{ display: !this.state.changePass ? 'auto' : 'none' }} className="main">
          
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2>Account setting</h2>
          <div id="shut" onClick={this.state.closeModal}>X</div>
          </div>
          <div></div>
          <table>
            <tr>
              <td>Fullname</td>
              <td>{localStorage.fullname}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{localStorage.email}</td>
            </tr>
            <tr>
              <td>Storage package</td>
              <td>15GB</td>
            </tr>
          </table>
          <button onClick={() => this.setState({ changePass: true })} className="change-pass me-btn">
            Change password
          </button>
        </div>

       { this.state.changePass ? <div className="main">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2>Change password</h2> 
          <div id="shut" onClick={this.state.closeModal}>X</div>
          </div>
          <div>
          <p>Current password</p>
          <input
            value={this.state.cPassword}
            onChange={e => {
              this.setState({ cPassword: e.target.value });
            }}
            type="password"
          />
          </div>
          <div>
          <p>New password</p>
          <input
            value={this.state.newPassword}
            onChange={e => {
              this.setState({ newPassword: e.target.value });
            }}
            type="password"
          />
          </div>
          <div>
          <p>Type again</p>
          <input
            value={this.state.rnewPassword}
            onChange={e => {
              this.setState({ rnewPassword: e.target.value });
            }}
            type="password"
          />
          </div>
          <div>
          <button onClick={this.changePass} className="change-pass me-btn">
            Change password
          </button>
          </div>
        </div>:null}
      </>
    );
  }
}
