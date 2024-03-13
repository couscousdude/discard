import { prisma } from '$lib/server/db.server'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  try {
    const cardsets = await prisma.card_sets.findMany()
    return new Response(JSON.stringify(cardsets))
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 500 }))
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    // Create a new card set
    const cardSet = await prisma.card_sets.create({
      data: {
        user_id: 1,
        title: 'Sample Card Set',
        description: 'This is a sample card set'
      }
    })

    // Create sample cards and associate them with the card set
    const cards = await Promise.all([
      prisma.cards.create({
        data: {
          card_set_id: cardSet.id,
          front_text: 'What is the capital of France?',
          back_type: 'text',
          card_data: {
            create: {
              data_type: 'text',
              data: JSON.stringify({ text: 'Paris' })
            }
          }
        }
      }),
      prisma.cards.create({
        data: {
          card_set_id: cardSet.id,
          front_text: 'What is the largest planet in our solar system?',
          back_type: 'multiple_choice',
          card_data: {
            create: {
              data_type: 'multiple_choice',
              data: JSON.stringify({
                choices: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
                correctAnswer: 'Jupiter'
              })
            }
          }
        }
      }),
      prisma.cards.create({
        data: {
          card_set_id: cardSet.id,
          front_text: 'The __ is the powerhouse of the cell.',
          back_type: 'fill_in_blank',
          card_data: {
            create: {
              data_type: 'fill_in_blank',
              data: JSON.stringify({ answer: 'mitochondria' })
            }
          }
        }
      })
    ])

    return new Response(JSON.stringify({ cardSet, cards, status: 201 }))
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 500 }))
  } finally {
    await prisma.$disconnect()
  }
}
