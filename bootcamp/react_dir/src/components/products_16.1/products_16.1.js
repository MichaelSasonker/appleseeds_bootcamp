import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Products from './Products';
import Header from './Header';
import ProductDetail from './ProductDetail';
import './products_16.1.css';

class MainCont extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                <Header />
                    <div>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/products' component={Products} />
                        <Route path='/products/:id' exact component={ProductDetail} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainCont;

/* App.js
import React from 'react';
import MainCont from './components/products_16.1/products_16.1';

class App extends React.Component {

    render() {
        return (
            <div>
                <MainCont />
            </div>
        );
    }

}

export default App;
*/