import { TFunction } from '@internationalization';
import { toast } from 'react-toastify';

export const CustomToast = (t: TFunction, message: string, restProps?: object) =>
  toast(<p style={{ marginLeft: '15px' }}>{message}</p>, {
    icon: <img alt={t('pluginLogo')} src={chrome.runtime.getURL('logo-32.png')} />,
    ...restProps,
  });

export const ErrorToast = (t: TFunction, message: string, restProps?: object) =>
  CustomToast(t, message, { ...restProps, style: { backgroundColor: '#f60633' } });
