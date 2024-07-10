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

const formSchema = z.object({
 title: z.string().min(2).max(120),
 description: z.string().min(2).max(2000).trim(),
 image: z.string(),
});

interface CollectionFormProps{
 initialData?: CollectionType | null;
}

const CollectionForm: React.FC<CollectionFormProps> = ({initialData}) => {
   const router = useRouter()
   const [loading,setLoading] = useState(false)
 

    
 return loading ? <Loader /> : (
   <div >
      
    
    <h1 className={styles.title}>{initialData?.title}</h1>
    <Image src={initialData?.image} width={700} height={500}  />
    <div className={styles.post}>
    <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: initialData?.description }}
          />
 
 </div>
   
  </div>
 )
}

export default CollectionForm