"use client"
import { navLinks } from '@/lib/constants'
import { UserButton, useSession, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const LeftSideBar = () => {
    const pathname = usePathname()
    const {user} = useUser()
    const {session} = useSession()
 
  return (
    <div
    className='h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden' 
    > 
    <Image src="/logo.png" alt='logo' width={150} height={70} />
    <div className='flex flex-col gap-12'> 
        {navLinks.map((link)=>(
            <Link href={link.url} key={link.label}
            className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1":"text-gray-1"}`}
            >{link.icon}<p>{link.label}</p></Link>
        ))}
    </div>
    <div className='flex gap-4 text-body-medium items-center'>
       
         {user?(
       <>
        <UserButton/>
        <p className='font-bold text-bl'>{session?.user?.id}</p>
       
       </>
         ):(
      <>
       <Link href="/sign-in"><Button>Sign In</Button></Link>
       <Link href="/sign-up"><Button>Sign Up</Button></Link>
      </>
         )}
    </div>
    </div>
  )
}

export default LeftSideBar