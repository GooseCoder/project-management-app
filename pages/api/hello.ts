import { NextApiRequest, NextApiResponse } from 'next';

export default async function register(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.send('hi');
}
