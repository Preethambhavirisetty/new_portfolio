import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ContactHead = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-8 lg:mb-12"
  >
    <h3 className={`${styles.sectionHeadText} text-black-100 mb-2`}>Contact.</h3>
    <p className="text-black-100/60 text-sm lg:text-base font-light tracking-wide">
      Let's connect and discuss how we can work together
    </p>
  </motion.div>
);

const ContactInfoCard = ({ icon, label, value, href, onClick, isButton = false }) => {
  const content = (
    <div className={`flex items-center gap-4 p-4 lg:p-5 bg-cream-light/60 backdrop-blur-sm border border-black-100/20 rounded-lg hover:bg-cream-light/80 transition-all group ${isButton ? 'cursor-pointer' : ''}`} onClick={onClick}>
      <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black-100/5 rounded-lg group-hover:bg-black-100/10 transition-colors">
        <i className={`${icon} text-black-100 text-lg lg:text-xl`}></i>
      </div>
      <div className="flex-1 text-left">
        <p className="text-black-100/60 text-xs lg:text-sm font-light mb-1">{label}</p>
        <p className="text-black-100 text-sm lg:text-base font-medium">{value}</p>
      </div>
      {isButton && (
        <i className="fa fa-copy text-black-100/40 group-hover:text-black-100 transition-colors"></i>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

const SocialLink = ({ icon, label, href, color = "text-black-100" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 p-3 lg:p-4 bg-cream-light/60 backdrop-blur-sm border border-black-100/20 rounded-lg hover:bg-cream-light/80 hover:border-black-100/40 transition-all group`}
  >
    <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-black-100/5 group-hover:bg-black-100/10 transition-colors`}>
      <i className={`${icon} ${color} text-lg lg:text-xl`}></i>
    </div>
    <span className="text-black-100 text-sm lg:text-base font-medium">{label}</span>
    <i className="fa fa-external-link text-black-100/40 text-xs ml-auto"></i>
  </a>
);

const Contact = () => {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
  };

  return (
    <div className="w-full min-h-screen bg-cream-light relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-black-100/10 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-black-100/10 rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-black-100/20 to-transparent hidden xl:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ContactHead />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Contact Information */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <ContactInfoCard
                icon="fa fa-envelope"
                label="Email"
                value="kbhavir1@binghamton.edu"
                onClick={() => copyToClipboard("kbhavir1@binghamton.edu", "email")}
                isButton={true}
              />
              
              <ContactInfoCard
                icon="fa fa-phone"
                label="Phone"
                value="+1 (716) 808-9656"
                onClick={() => copyToClipboard("+17168089656", "phone")}
                isButton={true}
              />
              
              <ContactInfoCard
                icon="fa fa-map-marker"
                label="Location"
                value="Salt Lake City, Utah"
              />
            </div>

            <div className="pt-4 border-t border-black-100/20">
              <p className="text-black-100/60 text-sm font-light mb-4">Connect with me</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SocialLink
                  icon="fa fa-linkedin"
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/preetham2001/"
                  color="text-blue-600"
                />
                <SocialLink
                  icon="fa fa-github"
                  label="GitHub"
                  href="https://github.com/Preethambhavirisetty"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-black-100/20 hidden lg:block"></div>
              
              {/* Image container */}
              <div className="relative bg-cream-light/50 backdrop-blur-sm p-4 lg:p-6 border border-black-100/20 shadow-modern">
                <img
                  src="https://i.pinimg.com/736x/35/7f/b9/357fb9b1544798cdd63c5417ff7723dd.jpg"
                  alt="Contact"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-2 border-b-2 border-black-100/20 hidden md:block"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 border-r-2 border-t-2 border-black-100/20 hidden md:block"></div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 lg:mt-16 pt-8 border-t border-black-100/10"
        >
          <p className="text-black-100/60 text-xs lg:text-sm font-light">
            Made with passion #BetterJobs
          </p>
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