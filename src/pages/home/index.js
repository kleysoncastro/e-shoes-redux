import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../server/api';
import { formatPrice } from '../../util/format';
import { ListProcuct } from './styles';
import * as ActionCart from '../../store/mudules/cart/actions';

class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('products');

    // para formatar os valores para real BR
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduc = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ListProcuct>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => this.handleAddProduc(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADICIONAR OU CARRINHO</span>
            </button>
          </li>
        ))}
      </ListProcuct>
    );
  }
}
// conver aciton em props da aplicação
const mapDispatchToprops = dispatch => bindActionCreators(ActionCart, dispatch);

export default connect(
  null,
  mapDispatchToprops
)(Home);
