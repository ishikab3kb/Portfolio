"use client";

import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import PageHeading from "./PageHeading";
import ActionButton from "./ActionButton";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { state } = useTheme();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const mailtoUrl = `mailto:ishikajain121126@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoUrl;

    // Optional: Clear form after sending
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col px-6 w-full h-full">
      {/* Background Text */}
      <PageHeading bgText="CONTACT" headingw="GET IN" headingy="TOUCH" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DON&apos;T BE SHY !</h3>
            <p
              className={`${state.isDark ? "text-zinc-400" : "text-zinc-600"}`}
            >
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <MapPin
                  className={`w-6 h-6 ${
                    state.isDark ? "text-black" : "text-white"
                  }`}
                />
              </div>
              <div>
                <h4 className="font-bold uppercase">ADDRESS POINT</h4>
                <p
                  className={`${
                    state.isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  V-10/43 DLF Phase 3, Sector 24, Gurugram, Haryana India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <Mail
                  className={`w-6 h-6 ${
                    state.isDark ? "text-black" : "text-white"
                  }`}
                />
              </div>
              <div>
                <h4 className="font-bold uppercase">MAIL ME</h4>
                <p
                  className={`${
                    state.isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  ishikajain121126@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <Phone
                  className={`w-6 h-6 ${
                    state.isDark ? "text-black" : "text-white"
                  }`}
                />
              </div>
              <div>
                <h4 className="font-bold uppercase">CALL ME</h4>
                <p
                  className={`${
                    state.isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  +91 7690830782
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href="https://github.com/ishikab3kb"
              className={`p-3 ${
                state.isDark ? "bg-zinc-800" : "bg-zinc-300"
              } rounded-full hover:bg-amber-400 transition-colors`}
            >
              <Github
                className={`w-4 h-4 ${
                  state.isDark ? "text-black" : "text-white"
                }`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ishikajain1999/"
              className={`p-3 ${
                state.isDark ? "bg-zinc-800" : "bg-zinc-300"
              } rounded-full hover:bg-amber-400 transition-colors`}
            >
              <Linkedin
                className={`w-4 h-4 ${
                  state.isDark ? "text-black" : "text-white"
                }`}
              />
            </a>
            <a
              href="#"
              className={`p-3 ${
                state.isDark ? "bg-zinc-800" : "bg-zinc-300"
              } rounded-full hover:bg-amber-400 transition-colors`}
            >
              <Youtube
                className={`w-4 h-4 ${
                  state.isDark ? "text-black" : "text-white"
                }`}
              />
            </a>
            <a
              href="#"
              className={`p-3 ${
                state.isDark ? "bg-zinc-800" : "bg-zinc-300"
              } rounded-full hover:bg-amber-400 transition-colors`}
            >
              <Globe
                className={`w-4 h-4 ${
                  state.isDark ? "text-black" : "text-white"
                }`}
              />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className={`${
                state.isDark
                  ? "bg-zinc-800 border-none"
                  : "bg-transparent border-zinc-300"
              } h-14 rounded-md`}
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL"
              className={`${
                state.isDark
                  ? "bg-zinc-800 border-none"
                  : "bg-transparent border-zinc-300"
              } h-14 rounded-md`}
            />
          </div>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="YOUR SUBJECT"
            className={`${
              state.isDark
                ? "bg-zinc-800 border-none"
                : "bg-transparent border-zinc-300"
            } h-14 rounded-md`}
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE"
            className={`${
              state.isDark
                ? "bg-zinc-800 border-none"
                : "bg-transparent border-zinc-300"
            } min-h-[200px] rounded-md`}
          />
          <div className="flex justify-end">
            <ActionButton text="SEND MESSAGE" icon={Send} action={sendEmail} />
          </div>
        </div>
      </div>
    </div>
  );
}
