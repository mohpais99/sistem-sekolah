import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization'

export default async function handler(req, res) {
    if (req.method !== 'PUT') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const auth = await authorization(req, res);
        const {id} = req.query
        const user = await db('users').where({ id }).first();
        return res.status(200).json({data: user})
    } catch (error) {
        res.status(500).json({error: error})
    }
}