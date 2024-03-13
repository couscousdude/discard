import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params
  return new Response(JSON.stringify({ id }))
}
