import { Hono } from 'hono';
import { Bindings } from 'hono/types';
import { contextPrisma } from './prisma';

const app = new Hono<{ Bindings: Bindings }>().basePath('/api');

app.get("/users", async (c) => {
	const prisma = contextPrisma(c);
	try {
		const results = await prisma.user.findMany();
		return c.json(results);
	} catch (e) {
		return c.json({ err: e }, 500);
	}
});

export default app;
