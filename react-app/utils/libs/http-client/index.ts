import { SESSION_COOKIE_NAME } from '@pages/popup/constant';
import queryClient from '@query-client';
import urls from '@utils/endpoints/urls';
import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

const createHttpInstance = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      'Content-type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      if (error.response.status === 401 && error.config.url !== urls.auth.me) {
        toast.error(t('unauthorized'));
        await chrome.cookies.remove({ name: SESSION_COOKIE_NAME, url: import.meta.env.VITE_API_URL });
        await queryClient.resetQueries({ queryKey: [urls.auth.me] });
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export { AxiosError } from 'axios';

export default createHttpInstance();
