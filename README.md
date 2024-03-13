# dis**card**

not just another flashcards app.

## What is it?

discard (stylized dis**card**, and always lowercase) is a free (as in freedom) tool for creating smarter "flashcards."
Go beyond just flipping through definitions and supercharge your cards with the power of AI.
discard is fully open-source and hackable. It's not meant to replace Quizlet as a flashcard maker,
but instead provide a starting point for you to hack as you see fit into a custom studying tool, for any use case.

## Tech stack

discard's core tech stack is Svelte + SvelteKit. Svelte is a framework which
offloads most of the overhead associated with web frameworks to the compile step, leaving
you with a tiny bundle size (oftentimes less than just the size of `react` and `react-dom`)!
We are also using PostgreSQL and `Prisma` as the ORM. For authentication, we are planning
to use `auth.js/sveltekit`.

## How do I use it?

discard is currently heavily work-in-progress, and most of its features are non-functional.
Once basic functionality is established, you will be able to access it on its website
(or self-host it, using your own API keys)
