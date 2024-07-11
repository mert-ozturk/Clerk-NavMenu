import React from 'react'
import CollectionPage from './CollectionPage'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../ui/button'


 

const CollectionList = ({posts}) => {
 


  return (
    <>
     <CollectionPage posts={posts} />
    </>
  )
}

export default CollectionList