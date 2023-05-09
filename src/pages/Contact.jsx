import React, {useRef} from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgce6pn', 'template_53hm2ks', form.current, 'Q-Fcqnigqxo_M2J0E')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='h-[calc(100vh-80px)] bg-blue w-full'>
      <div className='w-[70%] mx-auto'>
        <div className='text-red text-3xl font-bold text-center pt-10'>
          Want to get in contact with me?
        </div>

        <div className='text-beige text-xl pt-5 flex flex-row justify-center items-center gap-2'>
          Send me a message on Linkedin: 
          <a href='https://www.linkedin.com/in/benjamin-moreira-338327210'><AiOutlineLinkedin size='2rem' /></a>
        </div>

        <div className='text-beige text-xl text-center pt-5'>
          Or shoot me an email here:
        </div>

        <div className='w-[70%] mx-auto pt-5'>
          <form ref={form} onSubmit={sendEmail} className='border rounded-lg border-beige text-beige text-xl font-bold p-5'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col w-1/2 pb-5'>
                <label>Name</label>
                <input type='text' name='name' className='rounded-lg text-black px-1 font-normal' />
              </div>

              <div className='flex flex-col w-1/2 pb-5'>
                <label>Email</label>
                <input type='email' name='email' className='rounded-lg text-black px-1 font-normal' />
              </div>

              <div className='flex flex-col w-1/2 pb-5'>
                <label>Message</label>
                <textarea name='message' className='rounded-lg text-black px-1 font-normal' />
              </div>

              <input type='submit' value='Send' className='cursor-pointer' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact