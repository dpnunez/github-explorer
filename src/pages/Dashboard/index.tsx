import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Form, Title, RepositoryList } from './styles';

import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(newRepository);
  }

  return (
    <>
      <img src={githubExplorerLogo} alt="Github explorer" />
      <Title>Eplore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          name="repo"
          placeholder="Digite aqui"
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <RepositoryList>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/46852072?s=460&u=aad56deb598deab9dba3ab8601c6574003c451e4&v=4"
            alt="Daniel"
          />
          <div>
            <strong>title</strong>
            <p>asd</p>
          </div>
          <FiChevronRight color="#C9C9D4" size={20} />
        </a>
      </RepositoryList>
    </>
  );
};

export default Dashboard;
