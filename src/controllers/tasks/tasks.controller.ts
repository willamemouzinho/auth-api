import { add } from './add'
import { deleteById } from './delete-by-id'
import { getAll } from './get-all'
import { getById } from './get-by-id'

export const tasksController = {
  getAll,
  getById,
  add,
  deleteById,
}
