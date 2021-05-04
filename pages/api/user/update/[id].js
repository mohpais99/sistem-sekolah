import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization'

export default async function handler(req, res) {
    if (req.method !== 'PUT') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const auth = await authorization(req, res);
        const {id} = req.query
        const params = req.body
        const user = await db('users').where({ id }).first();
        if (user) {
            const upd = await db('users').where({id}).update(params)
            if (upd !== 1) return res.status(500).end();
        }
        return res.status(200).json({s: 1, message: 'Successfully'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}