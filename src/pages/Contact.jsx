import React, {useRef} from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

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
        <motion.div className='text-red text-3xl font-bold text-center pt-10'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5
            }
          }}
        >
          Want to get in contact with me?
        </motion.div>

        <motion.div className='text-beige text-xl pt-5 flex flex-row justify-center items-center gap-2'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5
            }
          }}
        >
          Send me a message on Linkedin: 
          <motion.a href='https://www.linkedin.com/in/benjamin-moreira-338327210'
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale:0.8
            }}
          >
            <AiOutlineLinkedin size='2rem' className='hover:text-red'/>
          </motion.a>
        </motion.div>

        <motion.div className='text-beige text-xl text-center pt-5'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 1
            }
          }}
        >
          Or shoot me an email here:
        </motion.div>

        <div className='w-[70%] mx-auto pt-5'>
          <motion.form ref={form} onSubmit={sendEmail} className='border rounded-lg border-beige text-beige text-xl font-bold p-5'
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.2,
                duration: 1
              }
            }}
          >
            <div className='flex flex-col items-center'>
              <div className='flex flex-col w-1/2 pb-5'>
                <label>Name</label>
                <input type='text' name='name' className='rounded-lg text-red px-1 font-normal' />
              </div>

              <div className='flex flex-col w-1/2 pb-5'>
                <label>Email</label>
                <input type='email' name='email' className='rounded-lg text-red px-1 font-normal' />
              </div>

              <div className='flex flex-col w-1/2 pb-5'>
                <label>Message</label>
                <textarea name='message' className='rounded-lg text-red px-1 font-normal' />
              </div>

              <motion.input type='submit' value='Send' className='cursor-pointer border-2 rounded-lg px-3 py-1 border-beige hover:text-red hover:border-red' 
                whileHover={{
                  scale: 1.2
                }}
                whileTap={{
                  scale: 0.8
                }}
              />
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact