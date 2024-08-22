import knexFile from './knexfile.js'
import knex from 'knex'
import type { Choice } from '../../models/choices.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
export const connection = knex(config)

export async function getAllChoices(): Promise<Choice[]> {
  const choices = await connection('choices').select('*')
  return choices as Choice[]
}

// export async function getAlexRockSprite(): Promise<image> {
//   try {
//     const result = await connection('choices')
//       .select(
//         'events.id as Id',
//         'events.name as eventName',
//         'events.description as description',
//         'events.day as day',
//         'events.time as time',
//         'locations.name as locationName',
//       )
//       .where('events.day', day)

//     return result as EventWithLocation[]
//   } catch (error) {
//     console.error('Error fetching events by day:', error)
//     throw error
//   }
// }
