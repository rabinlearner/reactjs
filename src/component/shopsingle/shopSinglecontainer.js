import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginModal from '../modal/loginmodel';
import { MyContextConsumer } from '../../context';
class ShopSingleContainer extends React.Component {
    state = {
        loginmodel: false,
        cartitem: []
    }
    toggleLoginModel = () => {
        this.setState((prevState) => {
            return {
                loginmodel: !prevState.loginmodel
            };
        })
    }
    closeModal = () => {
        this.setState({
            loginmodel: false
        })
    }


    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <img src={this.props.data.url} />
                    </Col>
                    <Col xs={6} md={5}>
                        <h1>{this.props.data.title}</h1>
                        <MyContextConsumer>
                            {({ isAuth, incraseCounter }) =>
                                isAuth ?
                                    <div>
                                        <button className="btn btn-primary" onClick={e => incraseCounter(this.props.cartItem)}>Add To Cart</button>
                                    </div>
                                    :
                                    <div className="buttonregisterorlogin">
                                        <button className="btn btn-primary" onClick={this.toggleLoginModel}>Login</button>
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                            }
                        </MyContextConsumer>

                    </Col>
                </Row>
                <LoginModal toggle={this.state.loginmodel} closeModal={this.closeModal} id={this.props.id} />
            </Grid>
        )
    }

}

export default ShopSingleContainer;