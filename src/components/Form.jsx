import { useForm } from "react-hook-form";
import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import { useState } from "react";
import utils from "@/lib/utils";

console.log("coming form the file");

function Form() {
  const{handleSubmit, register} = useForm();


  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

 

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit((data)=> console.log(data))}
      >
        {/* Input */}
        <input
          type="text"
          {...register("fullname", {required: "kindly enter your name"})}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
         
        />
         {error.fullname&&(
          <p className="text-red-500 text-xs">
            {error.fullname.message}
          </p>  
        )}
        <input
          type="email"
          {...register("email",{required: "kindly enter your email"})}
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"  
        />
      {error.email&&(
          <p className="text-red-500 text-xs">
            {error.email.message}
          </p>  
        )}
        <input
          type="text"
         {...register("message",{required: "kindly enter your message"})}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        
        />
        {error.message&&(
          <p className="text-red-500 text-xs">
            {error.message.message}
          </p>  
        )}

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox */}
        <section className="mb-12 grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label
                key={service + idx}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="checkbox"
                  {...register("services",{required: "kindly select a service"})}
                  value={service}
                  className="size-6"
                />
                  {error.service&&(
          <p className="text-red-500 text-xs">
            {error.message.service}
          </p>  
        )}
                {service}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          Let's get started
          <TbFlareFilled size={20} className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;