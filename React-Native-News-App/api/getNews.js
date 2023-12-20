import api from "./client";
const getTodayDate = () => {
  const today = new Date();
  // Formatea la fecha a YYYY-MM-DD
  return today.toISOString().split('T')[0];
};

const getStartDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};

const getNews = () => {
  const toDate = getTodayDate();
  const fromDate = getStartDate(7); // Obtener noticias desde hace 7 días
  return api.get(`everything?q=esports&language=es&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=f72d279329cf4f8f9c76a820d545e010`);
};

const searchedNews = (str) => {
  return api.get(`everything?q=${str}&language=es&apiKey=f72d279329cf4f8f9c76a820d545e010`);
};

export default {
  getNews,
  searchedNews,
};
