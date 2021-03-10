import styled from "styled-components";
import { Typography, CardContent } from "./../../../components";

export const LabelStyled = styled(Typography)`
  font-weight: 400;
  font-size: 1.25rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.0rem;
`;
export const CardContentStyled = styled(CardContent)`
border-left: 8px solid ${({color}) => color || '#0984e3'}
`


export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;
