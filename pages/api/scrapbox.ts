import Axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await Axios.get('http://scrapbox.io/api/pages/kurogoma4d-lab/');
    const data = response.data;

    res.status(200).json(data);
}