import { Router } from '..';
import { Book } from '../../db/models';

const router = new Router('books');

// GET /books
router.get('/', async (req, res) => res.json(await Book.findAll()));

// GET /books/:id
router.get('/:id', async (req, res) => res.json(await Book.findByPk(req.params.id)));

export default router;
