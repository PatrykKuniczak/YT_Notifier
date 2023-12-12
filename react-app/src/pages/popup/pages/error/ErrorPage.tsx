import octagonError from '@assets/img/exclamation-octagon-icon.svg';
import { useTranslation } from '@internationalization';
import { Stack, styled } from '@mui/system';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledHomePageWrapper } from '@pages/popup/pages/home/home-wrapper';
import GlobalStyles from '@utils/data/global-styles';
import { textMixin } from '@utils/data/mixins/text-mixin';
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
  const { t } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <StyledHomePageWrapper>
        <StyledErrorContainer>
          <StyledIcon
            style={{ marginBottom: '15px' }}
            src={octagonError}
            alt={''}
            aria-hidden={true}
            width={60}
            height={60}
          />
          <h1>{t('fatalErrorHeading')}</h1>
          <p style={{ fontSize: '16px' }}>{t('fallbackError')}</p>
        </StyledErrorContainer>
      </StyledHomePageWrapper>
    </>
  );
};
