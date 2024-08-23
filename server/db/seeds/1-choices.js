export async function seed(knex) {
  await knex('choices').insert([
    {
      id: 1,
      name: 'Rock',
      player_img: '/images/alex-rock.png',
      computer_img: '/images/gooseka-rock.png',
    },
    {
      id: 2,
      name: 'Paper',
      player_img: '/images/alex-paper.png',
      computer_img: '/images/gooseka-paper.png',
    },
    {
      id: 3,
      name: 'Scissors',
      player_img: '/images/alex-scissors.png',
      computer_img: '/images/gooseka-scissors.png',
    },
    {
      id: 4,
      name: 'idle',
      player_img: '/images/alex.png',
      computer_img: '/images/gooseka.png',
    },
  ])
}
