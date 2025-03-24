"use client";

import {
  Facebook,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import PageHeading from "./PageHeading";
import ActionButton from "./ActionButton";

export default function Contact() {
  return (
    <div className="flex items-center flex-col px-6 w-full h-full">
      {/* Background Text */}
      <PageHeading bgText="CONTACT" headingw="GET IN" headingy="TOUCH" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DON&apos;T BE SHY !</h3>
            <p className="text-zinc-300">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold uppercase">ADDRESS POINT</h4>
                <p className="text-zinc-300">
                  123 Stree New York City, United States Of America 750065.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold uppercase">MAIL ME</h4>
                <p className="text-zinc-300">ishikajain121126@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-400 p-3 rounded-md">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold uppercase">CALL ME</h4>
                <p className="text-zinc-300">+91 7690830782</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href="#"
              className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="YOUR NAME"
              className="bg-zinc-800 border-none h-14 rounded-md"
            />
            <Input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-zinc-800 border-none h-14 rounded-md"
            />
          </div>
          <Input
            type="text"
            placeholder="YOUR SUBJECT"
            className="bg-zinc-800 border-none h-14 rounded-md"
          />
          <Textarea
            placeholder="YOUR MESSAGE"
            className="bg-zinc-800 border-none min-h-[200px] rounded-md"
          />
          <div className="flex justify-end">
            <ActionButton text="SEND MESSAGE" icon={Send} />
          </div>
        </div>
      </div>
    </div>
  );
}
