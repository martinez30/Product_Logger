import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            await getMarkets(req, res);
            break;
        case 'POST':
            await postMarket(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

const getMarkets = async (req: NextApiRequest, res: NextApiResponse) => {
    const martkets = [
        {
            id: 1,
            name: 'Sonda',
        },
        {
            id: 2,
            name: 'Assaí',
        },
        {
            id: 3,
            name: 'Atacadão',
        },
        {
            id: 4,
            name: 'Covabra',
        }
    ]

    res.status(200).json(martkets);
}

const postMarket = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.body;

    res.status(201).json({ id: 1, name });
}