import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/client';
 

export default async (req: NextApiRequest,res: NextApiResponse) => {

  // const session = await getSession({req: req})
    res.json({
      content:'wellcome to the secret page'
    })
  

   
 }