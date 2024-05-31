const Author = require('../models/author');
const generateCRUDControllers = require('./generateCRUDControllers');

const authorCRUDControllers = generateCRUDControllers(Author);

const authorController = {
  ...authorCRUDControllers, 

  // Additional custom methods if any

  showAuthorList: async (req, res) => {
    try {
      const authorList = await Author.findAll();
      res.status(200).json(authorList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve author list' });
    }
  },

  findAuthorById: async (req, res) => {
    const { id } = req.params;
    try {
      const author = await Author.findByPk(id);
      if (author) {
        res.status(200).json(author);
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve author' });
    }
  },

  findAuthorByName: async (req, res) => {
    const { name } = req.query;
    try {
      const authors = await Author.findAll({ where: { music_group_name: name } });
      if (authors.length > 0) {
        res.status(200).json(authors);
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve author' });
    }
  },

  createAuthor: async (req, res) => {
    const { music_group_name, music_group_image } = req.body;
    try {
      const newAuthor = await Author.create({ music_group_name, music_group_image });
      res.status(201).json(newAuthor);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create author' });
    }
  },

  updateAuthor: async (req, res) => {
    const { id } = req.params;
    const { music_group_name, music_group_image } = req.body;
    try {
      const author = await Author.findByPk(id);
      if (author) {
        author.music_group_name = music_group_name;
        author.music_group_image = music_group_image;
        await author.save();
        res.status(200).json(author);
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update author' });
    }
  },

  deleteAuthor: async (req, res) => {
    const { id } = req.params;
    try {
      const author = await Author.findByPk(id);
      if (author) {
        await author.destroy();
        res.status(200).json({ message: 'Author deleted successfully' });
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete author' });
    }
  }
};

module.exports = authorController;