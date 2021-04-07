const { applyCreate } = require('@eeston/grpc-create-error')

module.exports = class GRPCError extends Error {
  constructor (message, code, metatada) {
    super()
    applyCreate(this, message, code, metatada)
  }
}
