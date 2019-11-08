import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../server/api';
import { formatPrice } from '../../util/format';
import { ListProcuct } from './styles';
import * as ActionCart from '../../store/mudules/cart/actions';

export default function Home() {

  const [product, setProduct] =  useState([]);

  const amount = useSelector(state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}))

  useEffect(() => {

    async function loadProduct() {

      const response = await api.get('products');

      // para formatar os valores para real BR
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProduct(data)

    }

    loadProduct();

  }, [])

  const dispatch = useDispatch()

 function handleAddProduc(id) {
    dispatch(ActionCart.addToCartRequest(id));
  };

    return (
      <ListProcuct>
        {product.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => handleAddProduc(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR OU CARRINHO</span>
            </button>
          </li>
        ))}
      </ListProcuct>
    );

}
