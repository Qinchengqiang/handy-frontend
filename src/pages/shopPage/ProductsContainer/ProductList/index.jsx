import React from "react";
import PropTypes from "prop-types";
import "./ProductionList.scss";

const ProductList = ({ category, children }) => (
  <div className="product-section">
    <div className="header">
      <span className="section-name">{category}</span>
      <span>
        <a href="https://shop.handy.com/collections/${category}">See All></a>
      </span>
    </div>
    <div className="cards-3">
      {children}
    </div>
  </div>
);

ProductList.propTypes = {
  children: PropTypes.node,
  category: PropTypes.string
}

export default ProductList


{/* export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      content: this.props.content,
      width: undefined
    };
  }

  render() {
    const { name, content, width } = this.props;
    if (content.length === 3) {
      return (
        <div className="product-section">
          <div className="header">
            <span className="section-name">{name}</span>
            <span>
              <a href="https://shop.handy.com/collections/${name}">See All></a>
            </span>
          </div>
          <div className="cards-3">
            {content.slice(0, 2).map((card, i) => (
              <ProductItem
                key={card.title}
                image={card.image}
                title={card.title}
                cur_price={card.cur_price}
                pre_price={card.pre_price}
                star={card.star}
              />
            ))}
            <div className="last-card">
            {content.slice(2, 3).map((card, i) => (
              <ProductItem
                key={card.title}
                image={card.image}
                title={card.title}
                cur_price={card.cur_price}
                pre_price={card.pre_price}
                star={card.star}
              />
            ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product-section">
          <div className="header">
            <span className="section-name">{name}</span>
            <span>
              <a href="https://shop.handy.com/collections/best-sellers">
                See All>
              </a>
            </span>
          </div>
          <div className="cards-2">
            {content.map((card, i) => (
              <ProductItem
                key={card.title}
                image={card.image}
                title={card.title}
                cur_price={card.cur_price}
                pre_price={card.pre_price}
                star={card.star}
              />
            ))}
          </div>
        </div>
      );
    }
  }
} */}
