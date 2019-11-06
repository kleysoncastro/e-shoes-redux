import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './style';
import logo from '../../assets/images/logo.png';
// reduce como parametro
function Header({ cart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="E-shoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrnho</strong>
          <span>{cart} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
export default connect(state => ({
  cart: state.cart.length,
}))(Header);
