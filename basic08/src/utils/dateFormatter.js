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
