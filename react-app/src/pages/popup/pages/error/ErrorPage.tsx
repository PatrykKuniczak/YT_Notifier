import { Stack, styled, ThemeProvider } from '@mui/system';
import useTernaryDarkMode from '@hooks/use-ternary-darkmode';
import { textMixin } from '@utils/data/mixins/text-mixin';
import GlobalStyles from '@utils/data/global-styles';
import darkTheme from '@utils/data/themes/dark-theme';
import lightTheme from '@utils/data/themes/light-theme';

import { StyledIcon } from '@pages/popup/components/shared/icon';
import octagonError from '@assets/img/exclamation-octagon-icon.svg';

import { StyledHomePageWrapper } from '@pages/popup/pages/home/home-wrapper';
import React from 'react';

const ErrorContainerStyles = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    ...textMixin,

    alignSelf: 'center',
    alignItems: 'center',
    gap: 2,

    margin: `auto`,

    lineHeight: '1.6rem',

    fontWeight: 'fontWeight.normal',
    fontSize: 'fontSize.l',
    textOverflow: 'ellipsis',
    wordWrap: 'break-all',

    overflow: 'hidden',
  }),
);

const ErrorTextStyles = styled('div')(({ theme }) => theme.unstable_sx({}));

const ErrorParagraphStyles = styled('p')(({ theme }) =>
  theme.unstable_sx({
    fontSize: 'fontSize.sm',
  }),
);
export const ErrorPage = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledHomePageWrapper>
        <ErrorContainerStyles>
          <StyledIcon src={octagonError} alt={'Boundary error icon'} width={60} height={60} />
          <ErrorTextStyles>
            BŁĄD !
            <ErrorParagraphStyles>
              Wystąpił błąd krytyczny, odśwież stronę, gdy to nie pomoże, skontaktuj się z developerem
            </ErrorParagraphStyles>
          </ErrorTextStyles>
        </ErrorContainerStyles>
      </StyledHomePageWrapper>
    </ThemeProvider>
  );
};
