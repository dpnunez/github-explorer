import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/github-explorer-logo.svg';

interface Issue {
  url: string;
  id: string;
  title: string;
  user: {
    login: string;
  };
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
  };
}
interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [repositoryInfo, setRepositoryInfo] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RouteParams>();

  useEffect(() => {
    const getInitialData = async () => {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepositoryInfo(repositoryResponse.data);
      setIssues(issuesResponse.data);
    };

    getInitialData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repositoryInfo && (
        <RepositoryInfo>
          <header>
            <img src={repositoryInfo.owner.avatar_url} alt="sentry" />
            <div>
              <strong>{repositoryInfo.full_name}</strong>
              <p>{repositoryInfo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositoryInfo.stargazers_count}</strong>
              <p>stars</p>
            </li>
            <li>
              <strong>{repositoryInfo.forks_count}</strong>
              <p>forks</p>
            </li>
            <li>
              <strong>{repositoryInfo.open_issues_count}</strong>
              <p>issues abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={24} color="#C9C9D4" />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
