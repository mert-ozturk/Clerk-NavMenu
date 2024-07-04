 "use client"
 import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react'
import { Separator } from '../ui/separator'
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
import { useRouter } from "next/navigation"
const formSchema = z.object({
    title:z.string().min(2).max(20),
    description: z.string().min(2).max(500).trim(),
    image:z.string() 
  })

const CollectionForm = () => {
        const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          description:"",
          image:"",

        },
      })
      const  onSubmit = async (values: z.infer<typeof formSchema>) => {
         console.log(values)
      }
  return (
    <div className='p-10'>
        <p className='text-gray-700 text-heading2-bold'>Create Collection</p>
        <Separator className="bg-gray-600 mt-4 mb-7"   />

        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="descreption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Textarea placeholder="Descreption" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                 <ImageUpload 
                 value={field.value ? [field.value]: [] } 
                 onChange={(url)=>field.onChange(url)} 
                 onRemove={()=>field.onChange("")}
                 />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <div className="flex gap-10">
       <Button type="submit">Submit</Button>
       <Button type="button" onClick={()=>router.push("/collections")}>Discard</Button>
       </div>
      </form>
    </Form>
    </div>
  )
}

export default CollectionForm