
import React from 'react'
import { csrfToken } from 'next-auth/client'

export default ({ csrfToken }) => {
  return (
    <form method='post' action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label>
        Username
        <input name='username' type='text'/>
      </label>
      <label>
        Password
        <input name='password' type='text'/>
      </label>
      <button type='submit'>Sign in</button>
    </form>
  )
}

export async function getInitalProps(context) {
  return {
    csrfToken: await csrfToken(context)
  }
}






// import { GetServerSideProps } from "next"
// import { signIn } from "next-auth/client"
// import { ChangeEvent, useState } from "react"
// import {UserNameProvider} from '../../../contexts'

// export default function SignIn(props) {
  
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
// //arthur_acs@hotmail.com
// //Acs2228@tt7
//   const data = {
//     data: {
//       username:username,
//       password:password,
//       json: true
//     },
//     callbackUrl: 'http://localhost:3000/api/auth/signin/github',
// }

//   // function getFormData (event:ChangeEvent<HTMLInputElement>){
//   //   const data = event.target.value
//   //   return data
//   // }

//   console.log(props.error);
//   return (
//     <UserNameProvider username={username} password={password} >
//       <label>
//         Username
//         <input onChange={e=>setUsername(e.target.value) } type='text'/>
//       </label>
//       <label>
//         Password
//         <input onChange={e=>setPassword(e.target.value)} type='text'/>
//       </label>
//       <button type="submit" onClick={
//       ()=>  signIn('github', data)}>Sign in</button>
//     </UserNameProvider>
//   )
// }

// export const getServerSideProps: GetServerSideProps =  async (context) => {
//   const {error} = context.query
  
//   return {
//     props: {
//       error,
      
//     }
    
//   }
// }

