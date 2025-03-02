export const mockData = {
  info: {
    success: true,
    data: {
      info: "Some information about the <b>company</b>.",
    },
  },
  login: {
    success: true,
    data: {
      token: "fb566635a66295da0c8ad3f467c32dcf",
    },
  },
  profile: {
    success: true,
    data: {
      fullname: "Aleksei K",
      email: "aleksei@example.com",
    },
  },
  authors: [
    { authorId: 1, name: "Walt Disney" },
    { authorId: 2, name: "Mark Twain" },
    { authorId: 3, name: "Albert Einstein" },
  ],
  quotes: [
    { quoteId: 1, authorId: 1, quote: "The more you like yourself, the less you are like anyone else, which makes you unique." },
    { quoteId: 2, authorId: 1, quote: "Disneyland is a work of love. We didn't go into Disneyland just with the idea of making money." },
    { quoteId: 3, authorId: 1, quote: "I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter." },
    { quoteId: 4, authorId: 2, quote: "The secret of getting ahead is getting started." },
    { quoteId: 5, authorId: 2, quote: "Part of the secret of a success in life is to eat what you like and let the food fight it out inside." },
    { quoteId: 6, authorId: 2, quote: "You can't depend on your eyes when your imagination is out of focus." },
    { quoteId: 7, authorId: 3, quote: "Look deep into nature, and then you will understand everything better." },
    { quoteId: 8, authorId: 3, quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." },
    { quoteId: 9, authorId: 3, quote: "The only source of knowledge is experience." },
  ],
};
