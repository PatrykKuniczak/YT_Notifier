import { Navigate, Outlet } from "react-router-dom";
import React, { Ref, useContext } from "react";
import { useHome } from "@pages/popup/pages/home/use-home";
import { StyledHomePageWrapper } from "@pages/popup/pages/home/home-wrapper";
import { StyledHeaderContainer } from "@pages/popup/layouts/header-container";
import { StyledMainContent } from "@pages/popup/layouts/main-content";
import { StyledTitle } from "@pages/popup/components/shared/title-header";
import { StyledSearchBar } from "@pages/popup/components/shared/searchBar/search-bar";
import { StyledNavbar } from "@pages/popup/layouts/navbar";
import { AuthContext } from "@root/utils/core/authentication/authentication";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { title, ref, focus } = useHome();

  if (!user) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <StyledHomePageWrapper>
      <StyledHeaderContainer />

      <StyledMainContent>
        <StyledTitle>{title}</StyledTitle>

        <StyledSearchBar
          ref={ref as Ref<HTMLInputElement>}
          focus={focus}
        />

        <Outlet />
      </StyledMainContent>

      <StyledNavbar focus={focus} />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
