import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { bye } from "../assets";

// template_c11294f
// service_mbv90dk
// K1YIsgzpDz6AhT_Ik
const ContactHead = () => <h3 className={`${styles.sectionHeadText} text-black-100`}>Contact.</h3>;
const EmailDiv = () => {
  return (
    <div
        className="w-36 flex justify-center items-center space-x-3 p-2 rounded-lg bg-black-100 backdrop-blur-sm text-white cursor-pointer hover:bg-black-200 transition-colors shadow-modern border border-black-100"
        onClick={() => navigator.clipboard.writeText("kbhavir1@binghamton.edu")}
      >
        <span className="text-white">
          <i class="fa fa-copy"></i>
        </span>
        <span className="text-white">Copy Email</span>
      </div>
  )
}
const NumberDiv = () => {
  return (
    <div
        className="w-36 flex justify-center items-center space-x-3 p-2 rounded-lg border-2 border-black-100 text-black-100 cursor-pointer hover:bg-cream-dark transition-colors backdrop-blur-sm"
        onClick={() => navigator.clipboard.writeText("+17168089656")}
      >
        <span className="text-black-100">
          <i class="fa fa-copy"></i>
        </span>
        <span className="text-black-100">Copy Number</span>
      </div>
  )
}
const LinkedinDiv = () => {
  return (
    <div className="flex items-center space-x-3">
        <span className="text-blue-500">
          <i class="fa fa-linkedin text-xl"></i>
        </span>
        <a
          href="https://www.linkedin.com/in/preetham2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-100 hover:text-black-200 text-lg transition-colors"
        >
          LinkedIn
        </a>
      </div>
  )
}
const GithubDiv = () => {
  return (
    <div className="flex items-center space-x-3">
        <span className="text-black-100">
          <i class="text-xl fa fa-github"></i>
        </span>
        <a
          href="https://github.com/Preethambhavirisetty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-100 hover:text-black-200 text-lg transition-colors"
        >
          GitHub
        </a>
      </div>
  )
}
const HomeDiv = () => {
  return (
    <div className="flex items-center space-x-3">
        <span className="text-blue-800">
          <i className="fa fa-map-marker text-xl"></i>
        </span>
        <span className="text-xl text-black-100">Salt Lake City, Utah</span>
      </div>
  )
}

const Copyright = ({ }) => {
  return (
    <div className="absolute bottom-0 text-sm font-light text-black-100/80">Made with passion #BetterJobs</div>
  )
}

const Contact = () => {

  return (
    <div className="w-full h-full text-center bg-cream-light relative">
      <ContactHead />
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden h-full relative z-10`}
    >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='relative flex-[0.75] bg-cream-light/80 backdrop-blur-lg p-8 rounded-2xl h-96 flex flex-col justify-center items-center gap-3 shadow-modern border border-black-100/20'
    >
    
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-1">
            <div className="flex flex-col justify-end gap-1">
                <HomeDiv/>
                <LinkedinDiv/>
                <GithubDiv/>
            </div>
            <div className="flex flex-row gap-3"> 
              <img width="150" height="150" src={bye} />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <EmailDiv/>
            <NumberDiv/>
          </div>
      </div>

  
      
          <Copyright />
  
      
    </motion.div>
        
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[400px]'
        >
        <EarthCanvas />
      </motion.div>
    </div>
          </div>
  );
};

export default SectionWrapper(Contact, "contact");

{/* <motion.div className="bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-300 p-6 rounded-lg shadow-lg w-96 mx-auto"> */}
/*
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form, "email");
    emailjs
      .send(
        'service_mbv90dk',
        'template_c11294f',
        {
          from_name: form.name,
          to_name: "Preetham Bhavirisetty",
          from_email: form.email,
          to_email: "preethamk.967@gmail.com",
          message: form.message,
        },
        'K1YIsgzpDz6AhT_Ik'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  */
{/* <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
>
  <p className={styles.sectionSubText}>Get in touch</p>
  <h3 className={styles.sectionHeadText}>Contact.</h3>

  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className='mt-12 flex flex-col gap-8'
  >
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Name</span>
      <input
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}
        placeholder="What's your name?"
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your email</span>
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder="What's your Email?"
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Message</span>
      <textarea
        rows={7}
        name='message'
        value={form.message}
        onChange={handleChange}
        placeholder='What you want to say?'
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      />
    </label>

    <button
      type='submit'
      className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
    >
      {loading ? "Sending..." : "Send"}
    </button>
  </form>
</motion.div> */}