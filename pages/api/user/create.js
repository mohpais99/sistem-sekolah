import db from '../../../libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const params = req.body
        const user = await db('users').insert(params)
        if (user) {
            const salt = bcrypt.genSaltSync(10);
            const data = {
                user_id: user[0],
                username: 'jhon123',
                password: bcrypt.hashSync('random123', salt)
            }
            const auth = await db('auths').insert(data)
            if (!auth) return res.status(500).json({message: 'Something wrong!'});
            res.status(200).json({message: 'Successfully'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
}