import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {NextApiRequest, NextApiResponse} from 'next'




const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  // pages: {
  //   signIn: '/login',
  //   signOut: '/',
  //   error: 'api/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: null // If set, new users will be directed here on first sign in
  // }
}


export default (req:NextApiRequest,res:NextApiResponse) => NextAuth(req, res, options)