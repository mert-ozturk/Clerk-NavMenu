"use client"
import { columns } from '@/components/collections/CollectionsColumns'
import { DataTable } from '@/components/custom ui/DataTable'
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from "./card.module.css";
 
import Link from 'next/link'


const CollectionPage = ({posts}) => {
  const params = useParams()
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [collections,setCollections] = useState([])
  
  const getCollections = async () => {
    try{
      const res = await fetch("/api/collections",{
        method: "GET",

      })
      const data = await res.json()
      setCollections(data)
      setLoading(false)
    }catch(err){
      console.log("[collections_GET]",err)
    }
  }

  useEffect(()=>{
    getCollections()
  },[])

  
  console.log(collections)
  return (
    <div className="-mx-1 grid grid-cols-3 gap-5">
      

      {collections.map((item)=>(
    <div className='m-4 cursor-pointer'>
         <Link className="p-5 shadow-lg rounded cursor-pointer" href={`/collections/${item._id}`}>
          <h2 className="text-3xl lg:text-2xl leading-snug font-bold mb-3">{item.title}</h2>
          <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={item?.image || ""}
                        alt="Blog"
                        className="object-cover object-center"
                        fill
                      />
                    </div>
                  </div>
        </Link>
      <div className="mb-8 leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" dangerouslySetInnerHTML={{ __html: item?.description.substring(0,170)   }}/>
        <Link className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white" href={`/collections/${item._id}`}>Read More</Link>
        </div>
        
      ))}
         
        
        
      </div>
 
  )
}

export default CollectionPage