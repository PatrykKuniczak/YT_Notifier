import chevronDownIcon from '@assets/img/chevron-down-icon.svg';
import chevronUpIcon from '@assets/img/chevron-up-icon.svg';
import { AuthContext } from '@authentication';
import httpClient from '@http-client';
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';
import { styled, useTheme } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import queryClient, { useMutation } from '@query-client';
import urls from '@utils/endpoints/urls';
import { useContext, useState } from 'react';
import { StyledDeleteModal } from '@pages/popup/components/shared/delete-modal/delete-modal';
import { useDeleteModal } from '@pages/popup/components/shared/delete-modal/use-delete-modal';

const StyledListbox = styled('ul')(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',

    right: '-30px',

    minWidth: '200px',

    margin: '12px 0',
    padding: '6px',
    border: `1px solid ${theme.palette.background.secondary}`,
    borderRadius: '12px',
    outline: 'transparent',

    background: theme.palette.background.primary,
    color: theme.palette.color.primary,

    fontSize: 'fontSize.sm',

    boxShadow: `0px 4px 30px ${theme.palette.background.secondary}`,
  }),
);

const StyledMenuItem = styled(MenuItem)(({ theme }) =>
  theme.unstable_sx({
    padding: '8px',
    borderRadius: '8px',

    userSelect: 'none',
    cursor: 'pointer',
    listStyle: 'none',

    '&:hover:not(.Mui-disabled)': {
      backgroundColor: theme.palette.background.secondary,
    },

    '&.Mui-focusVisible': {
      outline: `1px solid #fff`,
      backgroundColor: theme.palette.background.secondary,
    },
  }),
);

const StyledMenuButton = styled(MenuButton)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    minHeight: 'calc(1.5em + 22px)',

    borderRadius: '12px',

    backgroundColor: 'transparent',

    cursor: 'pointer',
  }),
);

const StyledProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    user: { avatar },
  } = useContext(AuthContext);

  const theme = useTheme();

  const handleOpenChange = (_: unknown, open: boolean) => {
    setCollapsed(open);
  };

  const { open, changeModalVisibility } = useDeleteModal();

  const { mutate: signOut } = useMutation({
    mutationFn: () => httpClient.post(urls.auth.logout),
    onSuccess: async () => queryClient.resetQueries({ queryKey: [urls.auth.me] }),
  });

  const { mutate: removeAccount } = useMutation({
    mutationFn: () => httpClient.delete(urls.auth.removeAccount),
    onSuccess: async () => queryClient.resetQueries({ queryKey: [urls.auth.me] }),
  });

  return (
    <Dropdown onOpenChange={handleOpenChange}>
      <StyledMenuButton>
        <StyledAvatar src={avatar} alt={'Avatar'} width={40} height={40} />
        <StyledIcon
          src={collapsed ? chevronUpIcon : chevronDownIcon}
          alt={'Chevron'}
          width={16}
          height={16}
          sx={{
            filter: `${theme.palette.background.searchIconFilter}`,
          }}
        />
      </StyledMenuButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <StyledMenuItem onClick={changeModalVisibility}>Usun konto</StyledMenuItem>
        <StyledMenuItem onClick={() => signOut()}>Wyloguj się</StyledMenuItem>
      </Menu>
      <StyledDeleteModal
        open={open}
        content={
          <>
            Czy jesteś pewien, że chcesz usunąć konto?
            <br />
            Twoje dane zostaną trwale usunięte
          </>
        }
        onConfirm={() => removeAccount()}
        changeModalVisibility={changeModalVisibility}
      />
    </Dropdown>
  );
};

export default StyledProfile;
