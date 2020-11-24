import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const Title = styled.h1`
  font-size: 48px;
  letter-spacing: 0em;
  color: #3a3a3a;
  line-height: 56.25px;

  max-width: 480px;
  margin-top: 80px;
`;

const Form = styled.form<FormProps>`
  margin-top: 40px;
  width: 100%;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    transition: all 1s ease;
    border: ${props =>
      `2px solid ${props.hasError ? '#c53030' : 'transparent'}`};
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background-color: #04d361;
    color: white;
    border-radius: 0 5px 5px 0;
    transition: 200ms ease;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }

  & > * {
    border: 0;
    height: 70px;
  }
`;

const RepositoryList = styled.div`
  margin-top: 80px;
  max-width: 700px;
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

    img {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      margin-right: 12px;
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

const Error = styled.p`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export { Form, Title, RepositoryList, Error };
