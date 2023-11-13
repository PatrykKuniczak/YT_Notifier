import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';
import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';
import { useEffect } from 'react';

export const VideosRoute = () => {
  const isLoading = false;
  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { loadedVideos: 5 });
    });
  }, []);

  return (
    <StyledVideosSection>
      <StyledVideoArticle isLoading={isLoading} />
      <StyledVideoArticle isLoading={isLoading} />
      <StyledVideoArticle isLoading={isLoading} />
      <StyledVideoArticle isLoading={isLoading} />
      <StyledVideoArticle isLoading={isLoading} />
      <StyledVideoArticle isLoading={isLoading} />
    </StyledVideosSection>
  );
};
