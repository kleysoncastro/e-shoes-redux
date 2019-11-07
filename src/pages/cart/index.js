import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

import * as ActionCart from '../../store/mudules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, removeFromCart, updateAmoutRequest, total }) {
  function incremet(product) {
    updateAmoutRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmoutRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />

            <th>Protudo</th>
            <th>QTD</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.preceFormatted}</span>
              </td>

              <td id="buttons">
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button type="button" onClick={() => incremet(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(ActionCart, dispatch);

// converte reduce em props da aplicação
const mapStateToPorps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToPorps,
  mapDispatchToProps
)(Cart);
