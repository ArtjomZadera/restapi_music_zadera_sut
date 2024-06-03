const Group = require('../models/group');
const generateCRUDControllers = require('./generateCRUDControllers');

const groupCRUDControllers = generateCRUDControllers(Group);

const groupController = {
  ...groupCRUDControllers, 

  // Additional custom methods if any

  showGroupList: async (req, res) => {
    try {
      const groupList = await Group.findAll();
      res.status(200).json(groupList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve group list' });
    }
  },

  findGroupById: async (req, res) => {
    const { id } = req.params;
    try {
      const group = await Group.findByPk(id);
      if (group) {
        res.status(200).json(group);
      } else {
        res.status(404).json({ error: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve group' });
    }
  },

  findGroupByName: async (req, res) => {
    const { name } = req.query;
    try {
      const groups = await Group.findAll({ where: { music_group_name: name } });
      if (groups.length > 0) {
        res.status(200).json(groups);
      } else {
        res.status(404).json({ error: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve group' });
    }
  },

  createGroup: async (req, res) => {
    const { music_group_name, music_group_image } = req.body;
    try {
      const newGroup = await Group.create({ music_group_name, music_group_image });
      res.status(201).json(newGroup);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create group' });
    }
  },

  updateGroup: async (req, res) => {
    const { id } = req.params;
    const { music_group_name, music_group_image } = req.body;
    try {
      const group = await Group.findByPk(id);
      if (group) {
        group.music_group_name = music_group_name;
        group.music_group_image = music_group_image;
        await group.save();
        res.status(200).json(group);
      } else {
        res.status(404).json({ error: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update group' });
    }
  },

  deleteGroup: async (req, res) => {
    const { id } = req.params;
    try {
      const group = await Group.findByPk(id);
      if (group) {
        await group.destroy();
        res.status(200).json({ message: 'Group deleted successfully' });
      } else {
        res.status(404).json({ error: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete group' });
    }
  }
};

module.exports = groupController;