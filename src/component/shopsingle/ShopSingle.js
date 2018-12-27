import React from 'react';
import ShopSingleContainer from './shopSinglecontainer';
class ShopSingle extends React.Component {
    state = {
        single: []
    }

    async componentDidMount() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`);
        const data = await res.json();
        this.setState({ single: data })

    }
    // logout = () => {
    //     sessionStorage.removeItem("login");
    //     this.props.location.state = undefined
    //     alert("rabinawale")
    // }
    render() {

        return (
            <div className="container">
                <ShopSingleContainer
                    data={this.state.single}
                    id={this.props.match.params.id}
                    // logout={this.logout}
                    buttonToogle={this.props.location.state} />
            </div>
        )
    }

}
export default ShopSingle;