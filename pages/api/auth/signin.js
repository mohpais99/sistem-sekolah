import db from '../../../libs/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const {username, password} = req.body
        // Check user by username
        const checkUser = await db('auths').where({username}).first();
        if (!checkUser) return res.status(401).end();
        // if not undefine, then Check user by password
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (!checkPassword) return res.status(401).end();

        const token = jwt.sign({id: checkUser.user_id, username: checkUser.username}, process.env.APP_SECRET, {expiresIn: '7d'})
        const settoken = await db('auths').where({username}).update({ token });
        if (settoken !== 1) return res.status(500).end();
        return res.status(200).json({token})
    } catch (err) {
        console.log(err);
        // res.status(500).json({error: 'err'})
    }
}

