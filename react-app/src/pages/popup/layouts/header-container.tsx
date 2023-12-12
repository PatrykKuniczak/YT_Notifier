import { Stack, styled } from '@mui/system';
import LanguageSelector from '@pages/popup/components/language-selector';
import StyledProfile from '@pages/popup/components/shared/profile';
import { StyledThemeSwitch } from '@pages/popup/components/shared/theme-switch';

const HeaderContainerStyles = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    justifyContent: 'space-between',
    alignItems: 'center',

    px: 1,
    pt: 1,
  }),
);

export const StyledHeaderContainer = () => {
  return (
    <HeaderContainerStyles direction={'row'} alignItems={'center'}>
      <Stack direction={'row'} gap={2} alignItems={'center'}>
        <StyledThemeSwitch />
        <LanguageSelector />
      </Stack>

      <StyledProfile />
    </HeaderContainerStyles>
  );
};
