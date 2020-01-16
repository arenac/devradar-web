import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Dev = styled.li`
  background: #fff;
  box-shadown: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
