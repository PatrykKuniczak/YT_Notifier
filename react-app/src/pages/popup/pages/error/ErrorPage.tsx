import { Stack, styled } from '@mui/system';
import { textMixin } from '@utils/data/mixins/text-mixin';
import GlobalStyles from '@utils/data/global-styles';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import octagonError from '@assets/img/exclamation-octagon-icon.svg';
import { StyledHomePageWrapper } from '@pages/popup/pages/home/home-wrapper';
import React from 'react';

const StyledErrorContainer = styled(Stack)(({ theme }) =>
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

export const ErrorPage = () => {
  return (
    <>
      <GlobalStyles />
      <StyledHomePageWrapper>
        <StyledErrorContainer>
          <StyledIcon src={octagonError} alt={'Boundary error icon'} width={60} height={60} />
          <div>
            BŁĄD !
            <p style={{ fontSize: '16px' }}>
              Wystąpił błąd krytyczny, odśwież stronę, gdy to nie pomoże, skontaktuj się z developerem
            </p>
          </div>
        </StyledErrorContainer>
      </StyledHomePageWrapper>
    </>
  );
};
