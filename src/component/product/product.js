import React from 'react';
import PostData from '../../PostData';
import ProductWrapper from './ProductWrapper';
import { ClipLoader } from 'react-spinners';
class Product extends React.Component {
    state = {
        product: [],
        loading: true
    }
    componentDidMount() {
        PostData().then(result => {
            let ResponseData = result;
            if (ResponseData) {
                this.setState({ product: ResponseData, loading: false });
            }

        })
    }
    render() {
        return (
            <div>
                {this.state.loading ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                        />
                    </div>
                    :
                    <div className="container shoplist">
                        {this.state.product.map(item => <ProductWrapper key={item.id} title={item.title} uniqueKey={item.id} image={item.thumbnailUrl} />)}
                    </div>
                }
            </div>

        )
    }
}

export default Product;