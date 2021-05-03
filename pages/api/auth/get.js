import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization'

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const {id} = await authorization(req, res);
        const user = await db('users').where({ id }).first();
        return res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({error: error})
    }
}