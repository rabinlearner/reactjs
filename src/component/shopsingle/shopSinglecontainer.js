import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class ShopSingleContainer extends React.Component {
    state = {
        buttonToogle: false
    }
    componentDidMount() {
        const data = sessionStorage.getItem("login");
        const parsed = JSON.parse(data);

        if (parsed) {
            this.setState({ buttonToogle: true })
        }

    }
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <img src={this.props.data.url} />
                    </Col>
                    <Col xs={6} md={6}>
                        <h1>{this.props.data.title}</h1>
                        {this.state.buttonToogle ?
                            <button className="btn btn-primary" >Add To Cart</button>
                            :
                            <Link to="/Register" className="btn btn-primary">Register</Link>
                        }

                    </Col>
                </Row>

            </Grid>
        )
    }

}

export default ShopSingleContainer;