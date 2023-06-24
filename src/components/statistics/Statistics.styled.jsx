import styled from '@emotion/styled';
import { getRandomColor } from 'utils/getRandomColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 360px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-shadow: 0 0 1px #000;
  background-color: ${props => getRandomColor(props.index)};
`;
export const Label = styled.p`
  font-size: 0.8rem;
  color: #fff;
`;
export const Percentage = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;
