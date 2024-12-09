import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Question = () => {

  const questions = [
    {
      id: 1,
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: 2,
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: 3,
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: 4,
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: 5,
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: 6,
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10 max-w-[1500px]">
      <div>
        <h1 className="text-5xl font-bold text-center mb-8">
          Questions Looks Here
        </h1>
        <p className="text-center text-fourth mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-[95%] lg:w-[90%] xl:w-[80%] mx-auto gap-6 p-2 md:p-4">
        {questions.map((item) => (
          <div key={item.id} className="bg-question  p-2 md:p-4 shadow-md rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
