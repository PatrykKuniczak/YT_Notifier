import { Portal } from '@mui/base';
import { StyledNotificationButton } from '@pages/content/components/notification/notification-button';
import { TVoid } from '@types';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Notification = ({ opened, toggleOpen }: { opened: boolean; toggleOpen: TVoid }) => {
  return (
    <>
      {opened && (
        <Portal>
          <StyledNotificationButton onClick={toggleOpen} aria-label="closing notification">
            <ToastContainer position="bottom-right" theme="dark" />
          </StyledNotificationButton>
        </Portal>
      )}
    </>
  );
};

export default Notification;
