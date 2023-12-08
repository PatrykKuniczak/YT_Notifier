import { styled } from '@mui/system';
import { GITHUB_ISSUE_LINK } from '@pages/popup/constant';

export const StyledGitHubIconLink = styled('a')(({ theme }) =>
  theme.unstable_sx({
    position: 'fixed',
    bottom: 0,
    left: 0,

    width: 70,
    height: 70,

    cursor: 'pointer',
  }),
);

export const StyledGitHubIconBackground = styled('path')(({ theme }) =>
  theme.unstable_sx({
    filter: `${theme.palette.background.gitHubIconBackgroundFilter}`,
  }),
);

export const StyledGitHubIcon = () => (
  <StyledGitHubIconLink href={GITHUB_ISSUE_LINK} target={'_blank'}>
    <svg style={{ rotate: '180deg' }} viewBox="0 0 250 250">
      <StyledGitHubIconBackground d="M0 0L115 115L127 127L142 142L250 250V0H0Z"></StyledGitHubIconBackground>
      <path d="M127 107.157C112.5 97.8565 119.005 88.5 119.005 88.5C122.005 81.6 120.505 77.5 120.505 77.5C119.205 70.9 123.405 75.2 123.405 75.2C127.305 79.8 125.505 86.2 125.505 86.2C122.905 96.5 128.7 100.396 132.5 101.696M115.003 115C114.903 115.1 117.5 115 119.805 114.3L133.705 100.5C136.905 98.1 139.905 97.3 142.205 97.5C133.805 86.9 127.505 73.3 143.805 56.9C148.505 52.3 154.005 50.1 159.705 49.9C160.305 48.3 163.205 42.5 171.405 39C171.405 39 176.105 41.4 178.805 55.1C183.105 57.5 187.205 60.7 190.905 64.3C194.505 67.9 197.705 72.1 200.105 76.5C213.805 79.1 216.305 83.8 216.305 83.8C212.705 92 206.905 94.9 205.405 95.5C205.105 101.3 203.005 106.7 198.305 111.4C181.905 127.8 168.305 121.4 157.705 113C157.905 115.8 156.705 119.8 152.705 123.8L141 135.5C140 136.5 141.803 142.1 142.003 142L115.003 115Z"></path>
    </svg>
  </StyledGitHubIconLink>
);
