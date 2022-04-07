const UserService = require('../service/UserService');

class UserController {
  async create(req, res) {
    try {
      const result = await UserService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error)
       
    }
  }
  async findAll(req, res) {
    try {
      const result = await UserService.findAll(req.query)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const update = req.body;
      const result = await UserService.update(id, update);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error)
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      await UserService.delete(id);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new UserController();
