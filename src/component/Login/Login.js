import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { UserData } from '../../PostData';
import { ClipLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom'
class Login extends React.Component {
    state = {
        username: undefined,
        email: undefined,
        loading: false,
        redirect: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        if (this.state.email && this.state.email !== '') {
            try {
                UserData(this.state.username, this.state.email).then(result => {

                    this.setState({ loading: false })
                    if (result.length) {
                        sessionStorage.setItem("login", JSON.stringify(result));
                        this.setState({ redirect: true })
                    } else {
                        alert("please enter the write email and username");
                    }

                })
            }
            catch (e) {
                console.log(e)
            }
        } else {
            console.log("black")
        }

    }
    onChangeHandle = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        if (sessionStorage.getItem("login")) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div style={{ position: 'absolute', top: '20%', left: '50%', zIndex: '111111' }}>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <FormGroup
                            controlId="formBasicText"
                        // validationState={this.getValidationState()}
                        >
                            <ControlLabel>username</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                onChange={this.onChangeHandle}
                            />
                            <FormControl.Feedback />

                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="text"
                                name="email"
                                placeholder="Enter email"
                                onChange={this.onChangeHandle}
                            />
                            <FormControl.Feedback />
                            <input type="submit" className="btn btn-primary" value="login"></input>

                        </FormGroup>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;