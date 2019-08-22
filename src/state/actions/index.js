export function setImageData(imgData) {
  return {
    type: "SET_IMG_DATA",
    data: imgData
  };
}

export function setKeywords(keywords) {
  return {
    type: "SET_KEYWORDS",
    data: keywords
  };
}
