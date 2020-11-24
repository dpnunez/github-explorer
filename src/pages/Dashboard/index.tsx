import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, Title, RepositoryList, Error } from './styles';

import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const storageKey = '@githubExplorer:respositories';

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storage = localStorage.getItem(storageKey);

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepository}`);

      setRepositories([...repositories, response.data]);
      setNewRepository('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca desse repositório');
    }
  }

  return (
    <>
      <img src={githubExplorerLogo} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          name="repo"
          placeholder="Digite aqui"
          onChange={e => setNewRepository(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <RepositoryList>
        {repositories.map(repo => (
          <Link to={`/repositories/${repo.full_name}`} key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description || 'Nenhuma descrição foi escrita'}</p>
            </div>
            <FiChevronRight color="#C9C9D4" size={20} />
          </Link>
        ))}
      </RepositoryList>
    </>
  );
};

export default Dashboard;
