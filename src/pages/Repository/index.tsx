import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/github-explorer-logo.svg';

interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/1396951?s=200&v=4"
            alt="sentry"
          />
          <div>
            <strong>Sentry</strong>
            <p>Descrition</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <p>stars</p>
          </li>
          <li>
            <strong>23</strong>
            <p>forks</p>
          </li>
          <li>
            <strong>1000</strong>
            <p>issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a href="/">
          <div>
            <strong>a</strong>
            <p>asdhuasuh</p>
          </div>
          <FiChevronRight size={24} color="#C9C9D4" />
        </a>
        <a href="/">
          <div>
            <strong>a</strong>
            <p>asdhuasuh</p>
          </div>
          <FiChevronRight size={24} color="#C9C9D4" />
        </a>
        <a href="/">
          <div>
            <strong>a</strong>
            <p>asdhuasuh</p>
          </div>
          <FiChevronRight size={24} color="#C9C9D4" />
        </a>
      </Issues>
    </>
  );
};

export default Repository;
