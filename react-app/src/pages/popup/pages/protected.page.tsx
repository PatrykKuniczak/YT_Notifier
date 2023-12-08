import { IProvidedAuthValues } from '@interfaces';
import { Stack, useTheme } from '@mui/system';
import AuthPage from '@pages/popup/pages/auth/auth.page';
import { pageMixin } from '@utils/data/mixins/page-mixin';
import { ReactNode } from 'react';
import { MoonLoader } from 'react-spinners';

export const ProtectedPage = ({ authValues, children }: { authValues: IProvidedAuthValues; children: ReactNode }) => {
  const {
    palette: { background },
  } = useTheme();

  if (authValues.userIsLoading) {
    return (
      <Stack justifyContent={'center'} alignItems={'center'} sx={{ ...pageMixin }}>
        <MoonLoader size={200} color={background.purple} />
      </Stack>
    );
  }

  if (!authValues.user) {
    return <AuthPage />;
  }

  return children;
};
