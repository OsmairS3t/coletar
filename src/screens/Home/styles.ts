import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Image } from 'react-native';


export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 55px 40px;
  height: ${RFPercentage(5)}px;
  margin-top: ${getStatusBarHeight() + RFValue(5)}px;
`;

export const Title = styled.Text`
  color: gray;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Logo = styled(Image)`
  width: 275px;
  height: 275px;
`;

export const Description = styled.Text`
  width: 275px;
  text-align: center;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: ${RFPercentage(10)}px;
`;

export const FooterImg = styled(Image)`
  margin-top: 20px;
`;
