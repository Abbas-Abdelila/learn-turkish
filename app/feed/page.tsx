import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

const Feed = async () => {
  const session = await getServerSession(authOptions);
    console.log("Session : ", session);
  return (
    <div className='h-screen flex justify-center items-center text-2xl'>Feed me more {session?.user.username}</div>
  )
}

export default Feed