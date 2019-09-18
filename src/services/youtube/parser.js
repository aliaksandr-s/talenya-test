const isValidLink = (link) => {
  const regEx = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

  return regEx.test(link);
};

const getVideoIdFromLink = (link) => {
  const CORRECT_ID_LENGTH = 11;
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = link.match(regExp);

  if (match && match[1].length === CORRECT_ID_LENGTH) {
    return match[1];
  }
};

export const transformLink = (link) => {
  if (!isValidLink(link) || !getVideoIdFromLink(link)) {
    return {
      error: "Sorry the link is not valid",
      data: null,
    }
  }

  return {
    error: null,
    data: "https://www.youtube.com/embed/" + getVideoIdFromLink(link)
  }
}
