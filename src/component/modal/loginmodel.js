import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { UserData } from '../../PostData';
import { ClipLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import { MyContextConsumer } from '../../context';

class LoginModal extends React.Component {
    state = {
        username: undefined,
        email: undefined,
        loading: false,
        redirect: false,
        data: []
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
                        const data = result;
                        this.setState({ redirect: true, data: data })
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
            return (
                <div>
                    <MyContextConsumer>
                        {this.state.data.length > 0 ?
                            ({ login }) => login(this.state.data) :
                            alert("not data")

                        }
                    </MyContextConsumer>
                    <Redirect to={{
                        pathname: `/shop/${this.props.id}`,
                    }} />
                </div>
            )
        }
        
        return (
            <div className="container">
                <Modal
                    isOpen={this.props.toggle}
                    onRequestClose={this.props.closeModal}
                > <div style={{ position: 'absolute', top: '20%', left: '50%', zIndex: '111111' }}>
                        <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                        />
                    </div>
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
                </Modal>
            </div>
        )
    }
}
export default LoginModal;