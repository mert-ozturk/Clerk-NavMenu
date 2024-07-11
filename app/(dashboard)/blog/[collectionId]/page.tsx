"use client"

import CollectionForm from "@/components/collections/CollectionForm"
import CollectionSingle from "@/components/collections/CollectionSingle"
import Loader from "@/components/custom ui/Loader"
import { useEffect, useState } from "react"
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useSession, useUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
 

const BlogDetails = ({params}:{params:{collectionId:string}}) => {
    const [loading,setLoading] = useState(true)
    const [collectionDetails,setCollectionDetails] = useState<CollectionType | null>(null)
    const {user} = useUser()
    const {session} = useSession()
   if(session?.user?.id !== "user_2imMvQkvxz5cGRPChUFeYnekY3U"){
        redirect("/")
    }



 
    const getCollectionDetails = async () => {
        try{
            const res = await fetch(`/api/collections/${params.collectionId}`,{
                method:"GET"
            })
            const data = await res.json()
            setCollectionDetails(data)
            setLoading(false)


        }catch(err){
            console.log("[collectionId_GET]",err)
        }
    }

    useEffect(()=> {
        getCollectionDetails()
    },[])

    return loading ? <Loader /> : (
        <>
    {user && (
        <CollectionForm initialData={collectionDetails} />
    )}
    </>
  )
}

export default BlogDetails