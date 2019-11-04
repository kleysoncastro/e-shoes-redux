import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ListProcuct } from './styles';

function Home() {
  return (
    <ListProcuct>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attitude-576/88/D22-3009-088/D22-3009-088_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attitude-576/88/D22-3009-088/D22-3009-088_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-band-masculino/93/D22-2024-793/D22-2024-793_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attitude-576/88/D22-3009-088/D22-3009-088_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-feminino/18/D24-1739-018/D24-1739-018_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis top de linha</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR OU CARRINHO</span>
        </button>
      </li>
    </ListProcuct>
  );
}

export default Home;
