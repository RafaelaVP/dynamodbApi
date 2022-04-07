const schemaUser = require('../schemas/userSchema');
const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super(schemaUser);
  }
}

module.exports = new UserRepository();