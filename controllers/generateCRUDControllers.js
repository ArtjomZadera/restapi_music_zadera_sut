const generateCRUDControllers = (model) => {
  const controllers = {
      create: async (req, res) => {
        try {
            // Добавляем userId к данным перед созданием записи
            const itemData = { ...req.body, userId: req.userId };
            
            const item = await model.create(itemData);
            res.status(201).json(item);
        } catch (error) {
              res.status(400).json(error);
          }
      },
      findAll: async (req, res) => {
          try {
              const items = await model.findAll();
              res.status(200).json(items);
          } catch (error) {
              res.status(500).json(error);
          }
      },
      findOne: async (req, res) => {
          try {
              const item = await model.findByPk(req.params.id);
              if (!item) return res.status(404).json({ message: 'Item not found' });
              res.json(item);
          } catch (error) {
              res.status(500).json(error);
          }
      },
      update: async (req, res) => {
          try {
              const [updated] = await model.update(req.body, { where: { id: req.params.id } });
              if (updated) {
                  const updatedItem = await model.findByPk(req.params.id);
                  res.json(updatedItem);
              } else {
                  res.status(404).json({ message: 'Item not found' });
              }
          } catch (error) {
              res.status(500).json(error);
          }
      },
      delete: async (req, res) => {
          try {
              const deleted = await model.destroy({ where: { id: req.params.id } });
              if (deleted) {
                  return res.status(204).json({ message: 'Item deleted' });
              }
              return res.status(404).json({ message: 'Item not found' });
          } catch (error) {
              res.status(500).json(error);
          }
      }
  };

  return controllers;
}


module.exports = generateCRUDControllers;