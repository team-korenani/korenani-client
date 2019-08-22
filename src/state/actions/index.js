export function setImageData(imgData) {
  return {
    type: "SET_IMG_DATA",
    data: imgData
  };
}

export function setResultData(keywordsData) {
  return {
    type: "SET_RESULT_DATA",
    data: keywordsData
  };
}
