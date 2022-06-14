import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.silver_light};
    color: ${({ theme }) => theme.colors.silver_dark};
    margin: 5px 0px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled<any>(Feather)`
  position: absolute;
  right: 15px;
`;
