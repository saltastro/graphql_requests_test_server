const Mutation = {
  async createUser(_, { name, cv }) {
    const { filename, mimetype } = await cv;

    console.log(`Filename: ${filename}`);
    console.log(`MIME type: ${mimetype}`);

    return {
      id: 42,
      name,
      cv: '/path/to/cv.pdf'
    }
  }
};

module.exports = Mutation;
