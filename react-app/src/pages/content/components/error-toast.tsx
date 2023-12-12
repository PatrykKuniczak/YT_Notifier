import { TFunction } from '@internationalization';
import { toast, ToastOptions } from 'react-toastify';

export const customToast = (t: TFunction, message: string, restProps: ToastOptions) =>
  toast(<p style={{ all: 'unset', fontSize: 16, paddingRight: 10 }}>{message}</p>, {
    icon: <img style={{ all: 'unset' }} alt={t('pluginLogo')} src={chrome.runtime.getURL('logo-32.png')} />,
    ...restProps,
  });

export const errorToast = (t: TFunction, message: string, restProps?: ToastOptions) =>
  customToast(t, message, { ...restProps, style: { backgroundColor: '#f60633' } });
