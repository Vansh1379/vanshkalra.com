"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Textarea } from "../ui/textarea";
import Alert from "../ui/Alert";
import { cn } from "@/utils/cn";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        {
          from_name: name,
          to_name: "Vansh",
          from_email: email,
          to_email: "vanshkalra1379@gmail.com",
          message: body,
        },
        process.env.NEXT_PUBLIC_KEY || ""
      )
      .then(
        () => {
          console.log("success");
          setName("");
          setBody("");
          setEmail("");
          setShowAlert(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div
      className="w-full mx-auto rounded-2xl p-6 md:px-8 bg-neutral-900/30 border border-white/5 backdrop-blur-sm"
    >
      {showAlert ? <Alert name={name} setShowAlert={setShowAlert} /> : null}
      <div className={`${showAlert ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="name" className="text-sm text-neutral-400">Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter your name"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-sm text-neutral-400">Email Address</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message" className="text-sm text-neutral-400">Message</Label>
            <Textarea
              onChange={(e) => setBody(e.target.value)}
              id="message"
              placeholder="Enter your message"
            />
          </LabelInputContainer>
          <button
            disabled={
              name.length === 0 || email.length === 0 || body.length === 0
            }
            className="relative group/btn w-full h-11 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            type="submit"
          >
            Send Message
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-6 h-[1px] w-full" />

          <div className="flex gap-3">
            <a
              href="https://github.com/Vansh1379"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-neutral-400 hover:text-white transition-all duration-200"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://x.com/VanshKalra1379"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-neutral-400 hover:text-white transition-all duration-200"
            >
              <IconBrandX className="h-4 w-4" />
              <span className="text-sm">X</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-kalra/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-neutral-400 hover:text-white transition-all duration-200"
            >
              <IconBrandLinkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
