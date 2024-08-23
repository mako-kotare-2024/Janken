// import knexFile from './knexfile.js'
// import knex from 'knex'
import type { Choice } from '../../models/choices.ts'
import connection from './connection'
// type Environment = 'production' | 'test' | 'development'

// const environment = (process.env.NODE_ENV || 'development') as Environment
// const config = knexFile[environment]
// export const connection = knex(config)

export async function getChoice(): Promise<Choice[]> {
  const choices = await connection('choices').select('*')
  return choices as Choice[]
}
