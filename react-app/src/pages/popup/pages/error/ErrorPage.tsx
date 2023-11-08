import { Stack, styled, ThemeProvider } from '@mui/system';
import useTernaryDarkMode from '@hooks/use-ternary-darkmode';
import { textMixin } from '@utils/data/mixins/text-mixin';
import GlobalStyles from '@utils/data/global-styles';
import darkTheme from '@utils/data/themes/dark-theme';
import lightTheme from '@utils/data/themes/light-theme';

import { StyledHomePageWrapper } from '@pages/popup/pages/home/home-wrapper';
import React from 'react';

const ErrorContainerStyles = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    ...textMixin,

    alignSelf: 'center',

    margin: `auto`,

    maxWidth: 242,
    maxHeight: '3.2rem',
    lineHeight: '1.6rem',

    fontWeight: 'fontWeight.normal',
    fontSize: 'fontSize.md',
    textOverflow: 'ellipsis',
    wordWrap: 'break-all',

    overflow: 'hidden',
  }),
);

export const ErrorPage = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledHomePageWrapper>
        <ErrorContainerStyles>Błąd! Coś poszło nie tak :(</ErrorContainerStyles>
      </StyledHomePageWrapper>
    </ThemeProvider>
  );
};
