import { IProvidedAuthValues } from '@interfaces';
import { useTheme } from '@mui/system';
import { StyledLoadingSpinnerWrapper } from '@pages/popup/components/shared/loading-spinner';
import AuthPage from '@pages/popup/pages/auth/auth.page';
import { ReactElement } from 'react';
import { MoonLoader } from 'react-spinners';

export const ProtectedPage = ({
  authValues,
  children,
}: {
  authValues: IProvidedAuthValues;
  children: ReactElement;
}) => {
  const {
    palette: { background },
  } = useTheme();

  if (authValues.userIsLoading) {
    return (
      <StyledLoadingSpinnerWrapper>
        <MoonLoader size={200} color={background.purple} />
      </StyledLoadingSpinnerWrapper>
    );
  }

  if (!authValues.user) {
    return <AuthPage />;
  }

  return children;
};
