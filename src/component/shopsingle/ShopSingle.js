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
    render() {
        return (
            <div className="container">
                <ShopSingleContainer data={this.state.single} />
            </div>
        )
    }

}
export default ShopSingle;