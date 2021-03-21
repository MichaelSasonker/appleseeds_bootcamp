import React from 'react';
import './card.css';

class Card extends React.Component {

    render() {
        return (
            <div className='card-cont'>
                {
                    this.props.bornBefore.map(obj => {
                        return (
                            <div key={obj.name} className='card'>
                                Name: {obj.name} <br/>
                                Birthday: {obj.birthday} <br/>
                                Fish: {obj.favoriteFoods.fish.map(type => <li key={type}>{type}</li>)} <br/>
                                Meats: {obj.favoriteFoods.meats.map(type => <li key={type}>{type}</li>)} <br/>
                            </div>
                        ); 
                    })
                }
            </div>
        );
    }

}

export default Card;
