import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../server/api';
import { formatPrice } from '../../util/format';
import { ListProcuct } from './styles';

class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('products');

    // para formatar os valores para real BR
    const data = response.data.map(product => ({
      ...product,
      preceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ListProcuct>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.preceFormatted}</span>

            <button type="button">
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

export default Home;
