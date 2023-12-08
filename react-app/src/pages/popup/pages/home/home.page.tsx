import { AuthContext } from '@authentication';
import { StyledSearchBar } from '@pages/popup/components/shared/searchBar/search-bar';
import { StyledTitle } from '@pages/popup/components/shared/title-header';
import { StyledHeaderContainer } from '@pages/popup/layouts/header-container';
import { StyledMainContent } from '@pages/popup/layouts/main-content';
import { StyledNavbar } from '@pages/popup/layouts/navbar';
import { StyledHomePageWrapper } from '@pages/popup/pages/home/home-wrapper';
import { useHome } from '@pages/popup/pages/home/use-home';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { title, ref, focus } = useHome();

  const playlistId = user?.userYtVideos.playlistId ?? null;

  return (
    <StyledHomePageWrapper>
      <StyledHeaderContainer />

      <StyledMainContent>
        <StyledTitle>{title}</StyledTitle>

        <StyledSearchBar ref={ref} focus={focus} />

        <Outlet />
      </StyledMainContent>

      <StyledNavbar playlistId={playlistId} focus={focus} />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
