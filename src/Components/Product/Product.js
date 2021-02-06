import React from 'react';
import './Product.css'
import items from './Product.json';
import Products from './Productdb.js';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            description: event.target.value
        })
    }


    render() {
        const { description, cost } = this.state;
        return (
            <React.Fragment>
                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={description} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="Sports">Sports</option>
                            <option value="RPG">RPG</option>
                            <option value="Shooter">Shooter</option>
                            <option value="Platformer">Platformer</option>
                            <option value="Simulator">Simulator</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$0</option>
                            <option value="medium">$20+</option>
                            <option value="high">$40+</option>
                        </select>
                    </div>
                </div>


                <section id="container" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (description === 'default' && cost === 'default') {
                                return <Products item={item} />
                            } else if (description === item.description && cost === item.cost) {
                                return <Products item={item} />
                            } else if (description === item.description || cost === item.cost) {
                                return <Products item={item} />
                            }
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default Filter;