import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 8px;
  max-width: 100%;
  width: 300px;
  background: #ecf0f3;
  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
`;

export const Status = styled.span`
  display: block;
  margin-left: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 5%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;
