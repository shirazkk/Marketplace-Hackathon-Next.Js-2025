"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone, MdWatchLater } from "react-icons/md";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, XCircle } from "lucide-react";

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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api/contactmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setStatus({ success: false, message: responseData.error });
        return;
      }

      setStatus({ success: true, message: "Message submitted successfully!" });
      setFormData({ name: "", email: "", subject: "", usermessage: "" });

      // Auto-hide the alert after 3 seconds
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
      setTimeout(() => {
        setStatus(null);
      }, 2000);
    }
  };

  return (
    <div className="relative">
      {/* Status Alert */}
      {status && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-96 animate-in fade-in slide-in-from-top duration-500">
          <Alert
            variant={status.success ? "default" : "destructive"}
            className={`shadow-lg border-l-4 ${
              status.success
                ? "border-l-green-500 bg-green-50"
                : "border-l-red-500 bg-red-50"
            } p-4 flex items-start gap-3`}
          >
            <div
              className={`p-2 rounded-full ${
                status.success
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {status.success ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1">
              <AlertTitle
                className={`text-lg font-semibold mb-1 ${
                  status.success ? "text-green-800" : "text-red-800"
                }`}
              >
                {status.success ? "Success!" : "Error"}
              </AlertTitle>
              <AlertDescription
                className={`text-sm ${
                  status.success ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.message}
              </AlertDescription>
            </div>
          </Alert>
        </div>
      )}

      <div className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-24 max-w-[1500px]">
        <div className="w-[90%]  mx-auto">
          <h1 className="text-4xl font-bold text-center mb-5">
            Get In Touch With Us
          </h1>
          <p className="text-center text-fourth">
            For More Information About Our Products & Services. Please Feel Free
            To Drop Us <br /> an Email. Our Staff Will Always Be There To Help
            You Out.
          </p>
        </div>

        <div className="mt-10 flex flex-col mx-10 md:flex-row justify-between items-start gap-5">
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
                  className="border-2 border-gray-200 px-7 py-8 w-full mt-4"
                />
              </label>
              <label className="font-semibold">
                Message
                <textarea
                  name="usermessage"
                  placeholder="Hi! I'd like to ask about..."
                  value={formData.usermessage}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-200 px-7 py-4 rounded-md w-full h-36 resize-none mt-4"
                />
              </label>
              <Button
                type="submit"
                className="w-[190px] mx-auto md:mx-0 h-12 text-white font-semibold bg-second hover:bg-hover text-center rounded-md mt-4"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
