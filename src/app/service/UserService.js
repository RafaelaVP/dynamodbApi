const UserRepository = require('../repository/UserRepository');


class UserService {
  async create(payload) {
    const result = await UserRepository.create(payload);
    return result;
  }

  async findAll(search) {
    const result = await UserRepository.findByParams(search);
    return result;
  }

  async update (id, payload) {
    const result = await UserRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    const result = await UserRepository.delete(id);
    return result;
  }
}

module.exports = new UserService();

