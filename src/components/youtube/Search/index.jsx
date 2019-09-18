import React, { useState } from 'react';
import Input from '../../global/Input';
import useGlobal from '../../../db/store';
import PreviewElement from './PreviewElement';
import { searchVideos } from '../../../services/youtube/ajax';
import { debounce } from 'lodash';

const previewStyles = {
  position: "absolute",
  backgroundColor: "white",
  width: "100%",
}

const wrapperStyles = {
  position: "relative",
}

const Search = () => {
  const [isShowingPreview, setIsShowingPreview] = useState(false);
  const [videos, setVideos] = useState([]);
  const [_, globalActions] = useGlobal();

  const handleSearch = async (keyword) => {

    if (keyword) {
      const videosResp = await searchVideos(keyword);
      setVideos(videosResp);
    } else {
      setVideos([]);
    }
  }

  const delayedSearch = debounce(handleSearch, 70);

  return (
    <div style={wrapperStyles}>
      <Input
        type="text"
        placeholder="search"
        onChange={e => delayedSearch(e.target.value)}
        onFocus={() => setIsShowingPreview(true)}
        onBlur={() => setIsShowingPreview(false)}
      />

      <div style={
        {
          ...previewStyles,
          display: isShowingPreview ? "block" : "none"
        }}>
        {videos && videos.map((video) =>
          <PreviewElement
            thumbnailSrc={video.thumbUrl}
            title={video.title}
            onClick={() => globalActions.setEmbededSrc(video.srcLink)}
            key={video.srcLink}
          />
        )}
      </div>
    </div>
  )
};

export default Search;
