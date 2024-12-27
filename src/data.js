export const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const formatViewCount = (count) => {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + "M"; 
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + "K";
  } else {
    return count.toString(); 
  }
};

