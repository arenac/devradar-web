import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  aside {
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    boder-radius: 2px;
    padding: 30px 20px;
  }

  main {
    flex: 1;
    margin-left: 30px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    aside {
      width: 100%;
    }

    main {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

