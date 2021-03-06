import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Loader from '../../components/Loader';

class AccountRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    setLoading = (value) => {
        this.setState({
            isLoading: value
        });
    }

    render() {
        return (
          <div className={this.state.isLoading ? 'login-page loading' : 'login-page'}>
            <div className="logo">
              <h2>Tech Drive</h2>
              <p>Best choice for online system!</p>
            </div>

            <div className="form-group">
              <Router>
                <Route path="/" exact component={() => <Login isLoading={this.state.isLoading} history={this.props.history} setLoading={this.setLoading} />} />
                <Route path="/signup" exact component={() => <Signup isLoading={this.state.isLoading} setLoading={this.setLoading} />} />
              </Router>
            </div>
            <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: '0.5s',
                    opacity: this.state.isLoading ? '0.9' : '0'
                }}
            >
              <Loader size={this.state.isLoading ? '75' : '0'} color="#fff" />
            </div>
            <div className="overlay" />

            <img alt="banner" src="img/init.png" className="home-vector" />
          </div>
        );
    }
}

export default AccountRouter;
