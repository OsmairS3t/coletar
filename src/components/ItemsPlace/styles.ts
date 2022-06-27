import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    border: 1px solid silver;
    border-radius: 10px;
    margin: 5px;
`;

export const Image = styled.View`
    width: 60px;
    height: 60px;
    background-color: ${({theme})=>theme.colors.text};
`;

export const Label = styled.Text``;

