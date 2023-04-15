import {NextApiRequest, NextApiResponse} from 'next';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Routes } from '@/config/routes';


const backData: { id: number | null, title: string | null } = {
    id: null,
    title: null,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    

    switch (req.method) {
        case 'GET':
            res.status(200).json({ message: `Received data: ${backData.title}` });
            break;
        case 'POST':
            const { title } = req.body;
            console.log(`Received data: ${title}`);
            if (req.body.id !== -1) {
                backData.id = req.body.id;
                backData.title = req.body.title;
            }
            res.status(200).json({ body: req.body });
            break;
        default:
            res.status(405).json({ message: 'Method not allowed' });
            break;
    }

    /*
    if (req.method === 'POST') {
        //const router = useRouter();
        const { title } = req.body;
        console.log(`Received data: ${title}`);
        //console.log(`Received data req: ${req.body["title"]}`);
        res.status(200).json({ message: `You submitted the following data: ${title}` });
        //router.push(`${Routes.public.testpage}`);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
    */
}