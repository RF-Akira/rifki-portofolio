import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bnkq2kf",      
        "template_j3wetvi",   
        form.current,
        "-bWnYl_Ce_u3xO6ZK"        
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">Contact</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white outline-none"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
        </form>

        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-gray-300 max-w-sm">
            Feel free to connect with me through any of the platforms below or send a message via form.
          </p>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/RF-Akira"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/rfkiprmna_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
