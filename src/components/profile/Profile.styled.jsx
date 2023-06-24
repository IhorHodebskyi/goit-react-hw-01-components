import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  width: 360px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 5%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const Name = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const Info = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #717275;
`;

export const StatsItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  background-color: b7b7b7;
`;

export const StatsList = styled.li`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
`;

export const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #717275;
`;

export const Quantity = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
