"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import styles from './collection.module.css'
import { z } from "zod"
import React, { useState } from 'react'
import { Separator } from '../ui/separator'
import "react-quill/dist/quill.bubble.css";
 

import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button"
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import ImageUpload from "../custom ui/ImageUpload"
import { redirect, useParams, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import Delete from "../custom ui/Delete"
import Image from "next/image"
import Loader from "../custom ui/Loader"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { Edit } from "lucide-react"
 
import { DataTable } from "../custom ui/DataTable"
import Collections from "@/app/(dashboard)/collections/page"
import { useUser } from "@clerk/nextjs"
import EditPage from "@/app/edit/page"

const formSchema = z.object({
 title: z.string().min(2).max(120),
 description: z.string().min(2).max(2000).trim(),
 image: z.string(),
});

interface CollectionFormProps{
 initialData?: CollectionType | null;
}

const CollectionSingle: React.FC<CollectionFormProps> = ({initialData}) => {
   const router = useRouter()
   const [loading,setLoading] = useState(false)
   const { user } = useUser();
 
    
 return loading ? <Loader /> : (
  <div className="-mx-4 flex flex-col gap-4 items-center justify-center"> 
  <div className="w-full px-4 lg:w-8/12">
  {user && (
        <div className="gap gap-4 flex items-center mt-4"> 
        <Link href={`/blog/${initialData?._id}`} className="hover:text-blue-700"><Edit /></Link>
       
        </div>
    )}
    <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">{initialData?.title}</h2>
    <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={initialData?.image || ""}
                        alt="Blog"
                        className="object-cover object-center"
                        fill
                      />
                    </div>
                  </div>
    <div className={styles.post}>
    <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: initialData?.description }}
          />
 
 </div>
 </div>
    
  </div>
 )
}

export default CollectionSingle