"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone, MdWatchLater } from "react-icons/md";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type FormData = {
  name: string;
  email: string;
  subject: string;
  usermessage: string;
};

type Status = {
  success: boolean;
  message: string;
} | null;

const contactDetails = [
  {
    icon: <FaLocationDot className="scale-150" />,
    title: "Address",
    details: "236 5th SE Avenue, New \nYork NY10000, United \nStates",
  },
  {
    icon: <MdLocalPhone className="scale-150" />,
    title: "Phone",
    details: "Mobile: +(84) 546-6789 \nHotline: +(84) 456-6789",
  },
  {
    icon: <MdWatchLater className="scale-150" />,
    title: "Working Time",
    details: "Monday-Friday: 9:00 - 22:00 \nSaturday-Sunday: 9:00 - 21:00",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    usermessage: "",
  });

  const [status, setStatus] = useState<Status>(null);

  // Handle form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api/contactmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setStatus({ success: false, message: responseData.error });
        return;
      }

      setStatus({ success: true, message: "Message submitted successfully!" });
      setFormData({ name: "", email: "", subject: "", usermessage: "" }); // Clear the form
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-24 max-w-[1500px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">
          Get In Touch With Us
        </h1>
        <p className="text-center text-fourth">
          For More Information About Our Products & Services. Please Feel Free
          To Drop Us <br /> an Email. Our Staff Will Always Be There To Help You
          Out.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="w-full md:w-[60%] flex flex-col gap-9">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {item.icon}
              <div>
                <h1 className="font-semibold text-2xl">{item.title}</h1>
                <p className="whitespace-pre-line">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[60%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <label className="font-semibold">
              Your name
              <Input
                type="text"
                name="name"
                placeholder="Abc"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 px-7 py-8 w-full mt-4"
              />
            </label>
            <label className="font-semibold">
              Email address
              <Input
                type="email"
                name="email"
                placeholder="Abc@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 px-7 py-8 w-full mt-4"
              />
            </label>
            <label className="font-semibold">
              Subject
              <Input
                type="text"
                name="subject"
                placeholder="This is an optional"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 px-7 py-8 w-full mt-4"
              />
            </label>
            <label className="font-semibold">
              Message
              <textarea
                name="usermessage" // Updated to match API expectation
                placeholder="Hi! I’d like to ask about..."
                value={formData.usermessage}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 px-7 py-4 rounded-md w-full h-36 resize-none"
              />
            </label>
            <Button
              type="submit"
              className="w-full bg-second hover:bg-hover text-white py-4"
            >
              Submit
            </Button>
          </form>

          {status && (
            <p
              className={`mt-4 ${status.success ? "text-green-500" : "text-red-500"}`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
