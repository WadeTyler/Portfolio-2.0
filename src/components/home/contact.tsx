'use client';
import {motion} from 'framer-motion';
import React, {FormEvent, useRef, useState} from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

  const form = useRef<HTMLFormElement | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSendSuccess(false);
    setSendError(false);

    if (form === null || form.current === null) return;

    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    })
      .then(
        () => {
          setIsSending(false);
          setSendError(false);
          setSendSuccess(true);
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          setSendSuccess(false);
          setSendError(true);
          console.log("FAILED TO SEND EMAIL: ", error.text);
        }
      );
  }

  return (
    <div className="w-full flex flex-col items-center lg:p-16 md:p-8 p-4 gap-8 bg-zinc-800">

      <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        className="lg:text-7xl text-5xl font-semibold text-foreground text-center z-30"
      >
        Contact
      </motion.p>
      <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.5}}
        className="text-accent"
      >
        Want to work together?
      </motion.p>
      <motion.form
        ref={form}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 1.0}}
        className="flex flex-col items-center max-w-[30rem] w-full gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type="text" required className="bg-zinc-900 rounded w-full p-3 focus:outline-0" placeholder="Your Name"
               name="name"/>
        <input type="email" className="bg-zinc-900 rounded w-full p-3 focus:outline-0" placeholder="Your Email"
               name="email"/>
        <textarea className="bg-zinc-900 rounded w-full p-3 focus:outline-0 resize-none h-48" placeholder="Your Message"
                  name="message"></textarea>
        <motion.div
          className=""
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 1.5}}
        >
          {isSending
            ? <span className="loading loading-spinner loading-sm"></span>
            : <button
              disabled={isSending}
              className={`px-3 py-2 border text-accent hover:border-accent hover:text-white duration-300`}
            >
              SUBMIT
            </button>
          }
        </motion.div>

        {sendSuccess && (
          <p className="text-center">Thanks for reaching out! I&#39;ll get back to you soon!</p>
        )}
        {sendError && (
          <p className="text-red-500 text-center">Message failed to send. Try again later or email directly at <strong
            className="text-white">contact@tylerwade.net</strong></p>
        )}

      </motion.form>

    </div>
  );
};

export default Contact;