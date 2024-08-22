import connection from './connection.ts'
import { Choice } from '../../models/choice.ts'

export async function getChoice(db = connection): Promise<Choice[]> {
  return db('choice').select()
}
// TODO: Set up database using lecture