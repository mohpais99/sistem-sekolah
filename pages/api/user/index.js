import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization'

export default async function handler(req, res) {
    // Handler method 
    if (req.method !== 'GET') return res.status(405).json({message: 'Method not allowed!'});
    const auth = await authorization(req, res);
    console.log(auth.id);
    const siswa = await db('users')
    res.status(200).json({data: siswa})
}