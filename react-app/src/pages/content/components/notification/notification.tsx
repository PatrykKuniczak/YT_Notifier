import xIcon from '@assets/img/x-icon.svg';
import { Portal } from '@mui/base';
import { styled } from '@mui/system';
import { StyledNotificationButton } from '@pages/content/components/notification/notification-button';
import { StyledNotificationContent } from '@pages/content/components/notification/notification-content';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { TVoid } from '@types';
import React from 'react';

const StyledNotification = styled('div')(({ theme }) =>
  theme.unstable_sx({
    position: 'fixed',
    zIndex: 99999,

    bottom: 32,
    right: 32,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 1,

    maxWidth: 360,

    p: 2,
    borderRadius: 2,

    backgroundColor: 'background.purple',
  }),
);

const Notification = ({ open, toggleOpen, content }: { open: boolean; toggleOpen: TVoid; content: string }) => {
  return (
    <>
      {open && (
        <Portal>
          <StyledNotification>
            <StyledNotificationButton onClick={toggleOpen} aria-label="closing notification">
              <StyledIcon src={chrome.runtime.getURL(xIcon)} alt={'close'} width={24} height={24} />
            </StyledNotificationButton>
            <StyledNotificationContent>{content}</StyledNotificationContent>
          </StyledNotification>
        </Portal>
      )}
    </>
  );
};

export default Notification;
