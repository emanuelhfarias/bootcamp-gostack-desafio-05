import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12;
        color: #999;
      }
    }
  }
`;

export const Filter = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;

  li {
    list-style: none;
    margin-left: 25px;
    border: 1px solid #000;
    width: 90px;
    text-align: center;
    padding: 3px 15px;
    border-radius: 5px;

    &.active {
      border: 2px solid #7159c1;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;

  button {
    width: 100px;
    margin-left: 25px;
    text-align: center;
    padding: 3px 15px;
    border: 1px solid #000;
    border-radius: 5px;
    color: #7159c1;

    &:hover {
      background: #7159c1;
      color: #FFF;
      border: 1px solid #FFF;
    }

    &:active {
      background: #4c1fe3;
    }

    &[disabled] {
      background: #d0d0d0;
    }
  }
`;
