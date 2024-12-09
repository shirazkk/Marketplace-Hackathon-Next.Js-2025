import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone, MdWatchLater } from "react-icons/md";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
  return (
    <div className="md:w-[90%] lg:w-[80%]  xl:w-[70%] mx-auto py-24 max-w-[1500px]">
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

      <div className="mt-10 md:mt-1 w-full py-5 md:py-10 lg:py-20 xl:py-28   px-3 md:px-7  lg:px-15 xl:px-28  flex flex-col md:flex-row  justify-center md:justify-between items-start gap-5">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col justify-center md:justify-items-start md:items-baseline items-center mx-auto  gap-9 mb-8 md:mb-0">
          {contactDetails.map((item, index) => (
            <div key={index}>
              <div className="flex gap-3 md:justify-items-start md:items-baseline justify-center items-center">
                {item.icon}
                <h1 className="font-semibold text-2xl ml-2">{item.title}</h1>
              </div>
              <p className="ml-9 whitespace-pre-line">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col gap-7 mx-auto">
          <label className="font-semibold">
            Your name
            <Input
              type="text"
              name="name"
              placeholder="Abc"
              className="border-2 border-gray-200 px-7 py-8  w-full  mt-4"
            />
          </label>
          <label className="font-semibold">
            Email address
            <Input
              type="email"
              name="email"
              placeholder="Abc@gmail.com"
              className="border-2 border-gray-200 px-7 py-8  w-full  mt-4"
            />
          </label>
          <label className="font-semibold">
            Subject
            <Input
              type="text"
              name="sub"
              placeholder="This is an optional"
              className="border-2 border-gray-200 px-7 py-8  w-full  mt-4"
            />
          </label>
          <p className="font-semibold">Message</p>
          <textarea
            name="message"
            placeholder="Hi! I’d like to ask about..."
            className="border-2 border-gray-200 px-7 py-4 rounded-md w-full  h-36 resize-none"
          />
          <Button className="w-[190px] mx-auto md:mx-0  h-12 text-white font-semibold bg-second hover:bg-hover text-center rounded-md mt-4">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
