import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-size: 16px;

    svg {
      margin-right: 8px;
    }
  }
`;

const RepositoryInfo = styled.main`
  width: 100%;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      margin-right: 22px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      flex: 1;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        display: block;
        margin-top: 8px;
        color: #6c6c80;
      }
    }
  }
`;

const Issues = styled.div`
  margin-top: 80px;
  a {
    background-color: white;
    border-radius: 5px;
    padding: 14px;
    display: flex;
    height: 100%;
    width: 100%;
    text-decoration: none;
    align-items: center;
    transition: all 100ms;

    &:hover {
      transform: perspective(500px) scale(1.04);
      box-shadow: 0 0 20px #3d3d4d33;
    }

    & + a {
      margin-top: 18px;
    }

    div {
      flex: 1;

      strong {
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-right: 15px;
    }
  }
`;

export { Header, RepositoryInfo, Issues };
