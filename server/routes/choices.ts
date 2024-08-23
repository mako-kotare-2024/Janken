import { Router } from 'express'

import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const choices = await db.getChoice()
    res.json(choices)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong retrieving choices' })
  }
})

export default router
