class BaseRepository {
    constructor(schema) {
      this._schema = schema;
    }
  
    async create(payload) {
      const result = await this._schema.create(payload);
      return result;
    }
  
    async findByParams() {
        const result = await this._schema.scan().exec();
        return result;
    }
  
    async update(id, payload) {
      return this._schema.update(id, payload, { new: true });
    }
  
    async delete(id) {
      return this._schema.delete(id);
    }
  }
  module.exports = BaseRepository;