import React, {ReactNode} from 'react';
import {Platform, StatusBar} from 'react-native';
import {KeyboardAvoid, Wrapper} from './styles';
import {useTheme} from 'styled-components/native';

interface Props {
  children: ReactNode;
}

function MainWrapper({children}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.white}
        barStyle={isIOS ? 'light-content' : 'dark-content'}
      />
      <Wrapper>
        <KeyboardAvoid behavior={isIOS ? 'padding' : undefined}>
          {children}
        </KeyboardAvoid>
      </Wrapper>
    </>
  );
}

export default MainWrapper;