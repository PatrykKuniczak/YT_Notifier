import useSearch from '@hooks/use-search';
import { StyledVideoArticle } from '@pages/popup/components/video/section/article/video-article';
import { StyledVideosSection } from '@pages/popup/components/video/section/videos-section';
import { useDeferredValue, useEffect, useMemo } from 'react';
import thumbnail from '@assets/img/thumbnail.png';

export const VideosRoute = () => {
  const videos = [
    {
      id: '1',
      thumbnail: thumbnail,
      authorName: 'XYZ Franko',
      whenPublished: '11 miesięcy temu',
      views: '1 mld wyświetleń',
      title: 'Hodujemy gatunek, który będzie dominował nad nami Hodujemy gatunek, który będzie dominował nad nami',
    },
    {
      id: '2',
      thumbnail: thumbnail,
      authorName: 'Test Testowski',
      whenPublished: '2 lata temu',
      views: '10 mln wyświetleń',
      title: 'To jest Test To jest Test To jest Test To jest Test To jest Test',
    },
  ];

  const isLoading = false;

  const { searchParamValue } = useSearch();

  const deferredSearchParam = useDeferredValue(searchParamValue);

  const filteredVideos = useMemo(
    () => videos?.filter(({ title }) => title.includes(deferredSearchParam)),
    [deferredSearchParam, videos],
  );

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { loadedVideos: 5 });
    });
  }, []);

  return (
    <StyledVideosSection>
      {filteredVideos?.map(({ id, thumbnail, authorName, whenPublished, views, title }) => (
        <StyledVideoArticle
          key={id}
          thumbnail={thumbnail}
          authorName={authorName}
          whenPublished={whenPublished}
          views={views}
          title={title}
          isLoading={isLoading}
        />
      ))}
    </StyledVideosSection>
  );
};
