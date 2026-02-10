import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
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
      "Thank you for reaching out. I'll get back to you shortly."
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
          console.log("message sent!");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const contactInfo = [
    {
      label: "Email",
      value: "natnaeltilahun97@gmail.com",
      link: "mailto:natnaeltilahun97@gmail.com",
      icon: (
<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
<path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
<path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
<path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
<path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
<path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
<path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
<path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
</svg>
      )
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/natnael-tilahun",
      link: "https://www.linkedin.com/in/natnael-tilahun/",
      icon: (
         <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="fill-blue-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>      )
    },
    {
      label: "Upwork",
      value: "Verified Professional Profile",
      link: "https://www.upwork.com/freelancers/~01f9324fbacc3fd323",
      icon: (
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
      )
    },
    {
      label: "GitHub",
      value: "github.com/Natnael-Tilahun",
      link: "https://github.com/Natnael-Tilahun",
      icon: (
<svg width="40" height="40" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>github [#142]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

</path>
            </g>
        </g>
    </g>
</svg>      )
    }
  ];

  return (
    <section
      id="contact"
      className="px-0 md:px-12 py-20 bg-background"
    >
      <div className="container mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">
            Let's Build Something Great
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Contact Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-10" data-aos="fade-right">
            <div>
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am currently open to high-impact freelance projects, contract roles, and technical consulting for enterprise platforms.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-4 -ml-4 border border-transparent hover:border-border hover:bg-muted/50 rounded-2xl transition-all"
                >
                  <div className="p-3 bg-muted rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider">{info.label}</h4>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                ref={form}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Full Name</label>
                    <Input
                      type="text"
                      name="user_name"
                      placeholder="e.g., John Doe"
                      className="rounded-xl border-border bg-muted/30 focus-visible:ring-primary h-12"
                      {...register("user_name", { required: true, maxLength: 80 })}
                    />
                    {errors.user_name && <p className="text-xs text-destructive mt-1 font-medium ml-1">Name is required.</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email Address</label>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="e.g., john@company.com"
                      className="rounded-xl border-border bg-muted/30 focus-visible:ring-primary h-12"
                      {...register("user_email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.user_email && <p className="text-xs text-destructive mt-1 font-medium ml-1">Provide a valid email address.</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Consultation"
                    className="rounded-xl border-border bg-muted/30 focus-visible:ring-primary h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Share some details about your project or inquiry..."
                    rows="6"
                    className="rounded-xl border-border bg-muted/30 focus-visible:ring-primary resize-none"
                    {...register("message", { required: true, minLength: 15 })}
                  ></Textarea>
                  {errors.message && <p className="text-xs text-destructive mt-1 font-medium ml-1">Message must be at least 15 characters.</p>}
                </div>

                <button
                  className="w-full md:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                  type="submit"
                >
                  Initiate Discussion
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="colored"
      />
    </section>
  );
}

export default Contact;
