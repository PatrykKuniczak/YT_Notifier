import chevronDownIcon from '@assets/img/chevron-down-icon.svg';
import chevronUpIcon from '@assets/img/chevron-up-icon.svg';
import { AuthContext } from '@authentication';
import httpClient from '@http-client';
import { useTranslation } from '@internationalization';
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';
import { styled, useTheme } from '@mui/system';
import { StyledAvatar } from '@pages/popup/components/shared/avatar';
import { StyledDeleteModal } from '@pages/popup/components/shared/delete-modal/delete-modal';
import { useDeleteModal } from '@pages/popup/components/shared/delete-modal/use-delete-modal';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { StyledSkeleton } from '@pages/popup/components/shared/styled-skeleton';
import queryClient, { useMutation } from '@query-client';
import urls from '@utils/endpoints/urls';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

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
  const { user, userIsLoading } = useContext(AuthContext);

  const theme = useTheme();

  const handleOpenChange = (_: unknown, open: boolean) => {
    setCollapsed(open);
  };

  const { open, changeModalVisibility } = useDeleteModal();

  const { t } = useTranslation();

  const { mutate: signOut } = useMutation({
    mutationFn: () => httpClient.post(urls.auth.logout),
    onSuccess: async () => {
      await queryClient.resetQueries({ queryKey: [urls.auth.me] });
      toast.success(t('successfulLogout'));
    },
  });

  const { mutate: removeAccount } = useMutation({
    mutationFn: () => httpClient.delete(urls.auth.removeAccount),
    onSuccess: async () => {
      await queryClient.resetQueries({ queryKey: [urls.auth.me] });
      toast.success(t('successfulDeleteAccount'));
    },
  });

  return (
    <Dropdown onOpenChange={handleOpenChange}>
      <StyledMenuButton aria-label={t('aria-labels.openProfileMenuButton')}>
        {userIsLoading ? (
          <StyledSkeleton circle={true} width={40} height={40} />
        ) : (
          <StyledAvatar src={user?.avatar} aria-hidden={true} alt={''} width={40} height={40} />
        )}
        <StyledIcon
          src={collapsed ? chevronUpIcon : chevronDownIcon}
          aria-hidden={true}
          alt={''}
          width={16}
          height={16}
          sx={{
            filter: `${theme.palette.background.searchIconFilter}`,
          }}
        />
      </StyledMenuButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <StyledMenuItem onClick={changeModalVisibility}>{t('deleteAccount')}</StyledMenuItem>
        <StyledMenuItem onClick={() => signOut()}>{t('logout')}</StyledMenuItem>
      </Menu>
      <StyledDeleteModal
        open={open}
        content={
          <>
            {t('deleteAccountModal.content1')}
            <br />
            {t('deleteAccountModal.content2')}
          </>
        }
        onConfirm={() => removeAccount()}
        changeModalVisibility={changeModalVisibility}
      />
    </Dropdown>
  );
};

export default StyledProfile;
