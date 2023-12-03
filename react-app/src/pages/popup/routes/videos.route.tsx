import thumbnail from '@assets/img/thumbnail.png';
import useSearch from '@hooks/use-search';
import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';
import { StyledVideoArticleSkeleton } from '@pages/popup/components/video/section/skeleton/video-article-skeleton';
import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';
import { useDeferredValue, useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const VideosRoute = () => {
  const videos = useMemo(
    () => [
      {
        id: '1',
        thumbnail: thumbnail,
        avatar: thumbnail,
        authorName: 'XYZ Franko',
        publishedAt: '2023-10-30T19:21:20Z',
        views: '1 mld',
        title: 'Hodujemy gatunek, który będzie dominował nad nami Hodujemy gatunek, który będzie dominował nad nami',
      },
      {
        id: '2',
        thumbnail: thumbnail,
        avatar: thumbnail,
        authorName: 'Test Testowski',
        publishedAt: '2021-08-10T16:41:20Z',
        views: '10 mln',
        title: 'To jest Test To jest Test To jest Test To jest Test To jest Test',
      },
    ],
    [],
  );

  const isLoading = false;

  const { searchParamValue } = useSearch();

  const deferredSearchParam = useDeferredValue(searchParamValue);
  const [lang] = useLocalStorage('language', 'en');

  const filteredVideos = useMemo(
    () => videos?.filter(({ title }) => title.includes(deferredSearchParam)),
    [deferredSearchParam, videos],
  );

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id!, { loadedVideosAmount: 5, lang });
    });
  }, [lang]);

  if (isLoading) {
    return (
      <StyledVideosSection>
        <StyledVideoArticleSkeleton />
        <StyledVideoArticleSkeleton />
      </StyledVideosSection>
    );
  } else {
    return (
      <StyledVideosSection>
        {filteredVideos?.map(({ id, ...restProps }) => <StyledVideoArticle key={id} {...restProps} />)}
      </StyledVideosSection>
    );
  }
};
