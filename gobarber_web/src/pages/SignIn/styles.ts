import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    > a {
      color: var(--white);
      display: inline-block;
      margin-top: 16px;

      transition: color 0.5s;

      &:hover {
        color: ${shade(0.2, '#fff')}
      }
    }
  }

  > a {
    color: var(--primary);
    margin-top: 16px;
    display: inline-flex;
    align-items: center;

    transition: color 0.5s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
