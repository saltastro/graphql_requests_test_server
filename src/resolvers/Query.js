const Query = {
  user(_, { id }) {
    return {
      id,
      name: 'John Doe',
      cv: '/path/to/cv.pdf'
    }
  }
};

module.exports = Query;
