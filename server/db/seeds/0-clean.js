export async function seed(knex) {
  await knex('choices').del()
}
