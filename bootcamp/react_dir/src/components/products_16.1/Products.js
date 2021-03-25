import React from 'react';
import { Link } from 'react-router-dom';
import DATA from './store';

class Products extends React.Component {

    state = { data: [] };

    componentDidMount() {
        this.setState({ data: DATA });
    }

    DisplayData = () => {
        return (this.state.data.map(obj =>
            <div key={obj.id}>
                <Link 
                    key={obj.id}
                    to={`/products/${obj.id}`}
                    className='product-link'
                >
                    {obj.title}
                </Link>
            </div> 
        ))
    }

    
    render() {
        return (
            <div className='product-cont'>
                {this.DisplayData()}
            </div>
        )
    }
}

export default Products;