export const formatSeconds = (remainingTime) => { 
    const minutes = Math.floor(remainingTime / 1000 / 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}