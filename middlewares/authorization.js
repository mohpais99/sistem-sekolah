import jwt from 'jsonwebtoken';

export default function authorization(req, res) {
    return new Promise((resolve, reject) => {
        const { authorization } = req.headers;
        if (!authorization) return res.status(401).end();
        
        let split = authorization.split(' ');
        const [type, token] = split
        if (type != 'Bearer') return res.status(401).end();
        return jwt.verify(token, process.env.APP_SECRET, function(err, decoded) {
            if (err) return res.status(401).end()
            return resolve(decoded)
        });
    })

}