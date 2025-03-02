import { mockData } from './mockData';

export const getInfo = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.info);
    }, 500);
  });
};

export const login = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'aleksei@example.com' && password === 'lkJlkn8hj') {
        resolve(mockData.login);
      } else {
        resolve({ success: false });
      }
    }, 500);
  });
};

export const getProfile = async (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.profile);
    }, 500);
  });
};

export const getAuthor = async (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const author = mockData.authors[Math.floor(Math.random() * mockData.authors.length)];
      resolve({ success: true, data: author });
    }, 500);
  });
};

export const getQuote = async (token, authorId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const quote = mockData.quotes.find((q) => q.authorId === authorId);
      resolve({ success: true, data: quote });
    }, 500);
  });
};
