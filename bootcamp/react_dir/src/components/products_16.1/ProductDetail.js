import React from 'react';
import DATA from './store';
import { Link } from 'react-router-dom'


class ProductDetail extends React.Component {

    state = { data: [] };

    componentDidMount() {
        this.setState({ data: DATA });
    }

    DisplayData = () => {
        if (this.state.data.length > 0) {
            let result = this.state.data.filter(obj => (obj.id == (this.props.match.params.id)))
            return (
                <div key={result[0].id} className='detail'>
                    <div className='left'>
                        <span className='title'>{result[0].title}</span>
                        Price: {result[0].price}$
                        <br/>
                        Size: {result[0].size}
                    </div>
                    <div className='right'>
                        <img 
                            src={result[0].imageUrl} 
                            alt={result[0].title} 
                            height='300px'
                            width='200px'
                        />
                        <Link to='/products'>
                            <button type='submit'>
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            );            
        }
    }


    render() {
        return (
            <div>
                {this.DisplayData()}
            </div>
        );
    }
}

export default ProductDetail;