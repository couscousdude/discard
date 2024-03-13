import type { RequestHandler } from '@sveltejs/kit'
import { db } from '$lib/server/db.server'

export const GET: RequestHandler = async ({ params, url }) => {
  const { id } = params
  const c = url.searchParams.get('withCards')

  let withCards: boolean = false
  if (c === 'true') {
    withCards = true
  }

  try {
    const cardSet = await db.card_sets.findUnique({
      where: {
        id: id
      },
      include: {
        cards: withCards
      }
    })

    if (cardSet) {
      return new Response(JSON.stringify({ status: 200, data: cardSet }))
    }

    return new Response(JSON.stringify({ error: 'Card set not found', status: 404 }))
  } catch (e) {
    return new Response(JSON.stringify({ error: e, status: 500 }))
  }
}
