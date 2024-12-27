import { formatDate } from "./dateFormatter";
export const mockData = [
  {
    id: 2,
    createDate: formatDate(new Date()),
    emotionId: 2,
    content: "조명가게 봄",
  },
  {
    id: 1,
    createDate: formatDate(new Date()),
    emotionId: 3,
    content: "오징어 게임 2 봄",
  },
];
