import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { TypeAnimation } from "react-type-animation";

function Contact() {
  const text_balck_700_light = "504e70";
  const YOUR_SERVICE_ID = "service_ooam44u";
  const YOUR_TEMPLATE_ID = "template_g0arq1v";
  const YOUR_PUBLIC_KEY = "__i-jycM1GtKOAT84";

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    sendEmail();
    reset();
    toast.success(
      "Thank you for reaching out to me. I'll contact yoiu very soon. "
    );
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className=" overflow-y-scroll flex flex-col text-xl px-8 md:px-12 py-10 dark:text-[#f2f2fc]"
    >
      <h1 className="text-4xl font-bold w-60 py-1 ">
        <TypeAnimation
          style={{
            display: "block",
          }}
          sequence={["Contact Me", 3000, ""]}
          speed={{ type: "keyStrokeDelayInMs", value: 250 }}
          // speed={40}
          repeat={Infinity}
        />
      </h1>
      <div>
        <hr className="border-2 border-red-500 h-1 w-28 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-16 mt-1 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-8 my-1 rounded-lg animate-pulse" />
      </div>

      <Card className="p-10 mt-4 rounded-2xl flex flex-col gap-10 border">
        <h1 className="text-center text-3xl text-red-500 pb-5 ">
          Have you any questions?
        </h1>
        <div className=" flex-col gap-10 grid grid-cols-2 md:grid-cols-5">
          <div className="basis-1/2 md:basis-1/5 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="fill-black dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
            </svg>
            <h1 className="font-bold text-lg">Call Me On</h1>
            <h1 className="text-base text-gray-400">+251 933654654</h1>
          </div>

          <div>
            <a
              href="mailto:natnaeltilahun97@gmail.com"
              target="_blank"
              className="basis-1/2 md:basis-1/5 flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                className="fill-black dark:fill-white rounded-xl"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
              </svg>
              <h1 className="font-bold text-lg">Email</h1>
              <h1 className="text-base text-gray-400">
                natnaeltilahun97@gmail.com
              </h1>
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/natnael-tilahun/"
            target="_blank"
            className="basis-1/2 md:basis-1/5 flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="fill-blue-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>
            <h1 className="font-bold text-lg">LinkedIn</h1>
            <h1 className="text-base text-gray-400">Natnael-Tilahun</h1>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01f9324fbacc3fd323"
            target="_blank"
            className="basis-1/2 md:basis-1/5 flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className="fill-red-500"
              viewBox="0 0 512 512"
            >
              <rect width="512" height="512" rx="15%" fill="#6fda44" />
              <path
                fill="#fff"
                d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"
              />
            </svg>
            <h1 className="font-bold text-lg">Upwork</h1>
            <h1 className="text-base text-gray-400">Natnael-Tilahun</h1>
          </a>

          <a
            href="https://github.com/Natnael-Tilahun"
            target="_blank"
            className="basis-1/2 md:basis-1/5 flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="fill-black dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
            </svg>
            <h1 className="font-bold text-lg">Github</h1>
            <h1 className="text-base text-gray-400">Natnael-Tilahun</h1>
          </a>
        </div>
        <div className="flex flex-col items-center py-3 ">
          <h1 className="text-center text-3xl text-red-500 py-3">
            SEND ME AN EMAIL
          </h1>
          <h1 className="text-lg text-center dark:text-gray-300 text-clip">
            I'M VERY RESPONSIVE TO MESSAGES
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
            className="flex flex-wrap justify-center gap-5 py-9 w-full"
          >
            <div className="flex flex-col md:flex-row w-full justify-between gap-6">
              <div className="w-full">
                <Input
                  type="text"
                  name="user_name"
                  className="focus-visible:ring-red-500 focus-visible:ring-1 rounded-lg dark:shadow-sm dark:border dark:border-slate-500 w-full"
                  placeholder="Name"
                  {...register("user_name", { required: true, maxLength: 80 })}
                />
                <p className="text-sm text-red-400 py-1">
                  {errors.user_name?.type === "required" && "Name is required."}
                  {errors.user_name?.type === "maxLength" &&
                    "Entered name is more than 80 character."}
                </p>
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  name="user_email"
                  className="focus-visible:ring-red-500 focus-visible:ring-1 rounded-lg dark:shadow-sm dark:border dark:border-slate-500 w-full"
                  placeholder="Email"
                  {...register("user_email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <p className="text-sm text-red-400 py-1">
                  {errors.user_email?.type == "required" &&
                    "Email is required."}
                  {errors.user_email?.type == "pattern" &&
                    "Entered email is in wrong format."}
                </p>
              </div>
            </div>
            <Textarea
              type="text"
              name="subject"
              className="focus-visible:ring-red-500 focus-visible:ring-1 rounded-lg dark:shadow-sm dark:border dark:border-slate-500 "
              placeholder="Subject"
            />
            <div className="w-full">
              <Textarea
                name="message"
                placeholder="Message"
                id="message"
                cols="10"
                rows="5"
                className="focus-visible:ring-red-500 focus-visible:ring-1 rounded-lg dark:shadow-sm dark:border dark:border-slate-500 "
                {...register("message", { required: true, minLength: 15 })}
              ></Textarea>
              <p className="text-sm text-red-400 py-1 text-left">
                {errors.message?.type === "required" &&
                  "Your message is required."}
                {errors.message?.type === "minLength" &&
                  "Entered message is less than 15 character."}
              </p>
            </div>

            <button
              className="rounded-lg bg-red-500 hover:bg-red-600 py-2 my-2 px-5 text-white  "
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </Card>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default Contact;
