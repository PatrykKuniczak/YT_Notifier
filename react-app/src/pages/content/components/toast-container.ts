import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  width: 350px !important;

  .Toastify__toast {
    height: 120px !important;

    padding: 10px !important;
  }

  .Toastify__toast-body {
    all: unset;

    display: flex !important;
    align-items: center !important;
    gap: 1.5rem !important;

    text-wrap: balance !important;
  }

  .Toastify__close-button svg {
    width: 25px !important;
    height: 25px !important;
  }
`;
