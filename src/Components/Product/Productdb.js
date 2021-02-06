import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="product">
                    <img className="product-img" alt="Makeup"
                        src={this.props.item.image} />
                    <h2 className="title">{this.props.item.title}</h2>
                    <p className="price">{this.props.item.price}</p>
                    <p>{this.props.item.description}</p> 
                    {/* <br /> */}
                    {/* <button>Email Us</button> */}
                </div>
            </React.Fragment >
        )
    }
}

export default Products;