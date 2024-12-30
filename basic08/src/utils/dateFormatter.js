export const formatDate = (date) => {
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const formatDateHeader = (date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};

export const getStringDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD

  // targetDate = new Date();
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const getStringToDate = (targetString) => {
  return new Date(targetString);
};
