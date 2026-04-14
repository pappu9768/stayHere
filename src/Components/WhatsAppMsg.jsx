import React from 'react'
import { MessageCircle } from 'lucide-react'
const WhatsAppMsg = () => {
    const phone = "919876543210";

  const message = encodeURIComponent(
    "Hi, I want to book a hotel from your website"
  );
  return (
    <>
       <a
        href={`https://wa.me/${phone}?text=${message}`}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-5 left-5 bg-green-500 hover:bg-green-800 text-white p-4 rounded-full shadow-lg z-50'
       
       >

        <MessageCircle className='w-6 h-6'/>
       </a>
    </>
  )
}

export default WhatsAppMsg