import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { z } from 'zod';


 
  
  interface CollectionSingleProps{
    initialData?: CollectionType | null;
  }
  
  const CollectionSingle: React.FC<CollectionSingleProps> = ({initialData}) => {
      const router = useRouter()
      const [loading,setLoading] = useState(false)
  return (
    <div>CollectionSingle</div>
  )
}

export default CollectionSingle