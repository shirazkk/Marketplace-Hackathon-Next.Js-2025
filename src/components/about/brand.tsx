import { CircleCheck } from "lucide-react";
import { CiCreditCard2 } from "react-icons/ci";
import { GrDeliver } from "react-icons/gr";
import { PiPlantLight } from "react-icons/pi";

// Sample data to map over
const BrandData = [
  {
    id: 1,
    icon: <GrDeliver size={30} />,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 2,
    icon: <CircleCheck size={30} absoluteStrokeWidth />,
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    id: 3,
    icon: <CiCreditCard2 size={30} />,
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 4,
    icon: <PiPlantLight size={30} />,
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
  },
];

const Brand = () => {
  return (
    <div className="w-full h-auto mt-24">
      {/* Section Title */}
      <h1 className="font-semibold text-3xl md:text-4xl text-center mb-8">
        What makes our Brand Different
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full md:w-[95%] lg:w-[90%] xl: mx-auto max-w-[1500px]">
        {BrandData.map((item) => (
          <div
            key={item.id}
            className="hover:scale-105 duration-300 ease-in-out cursor-pointer w-[309px] h-[244px] text-second flex flex-col justify-start items-start gap-3 bg-gray-100 p-6 rounded shadow-md mx-auto"
          >
            <div className="text-primary">{item.icon}</div>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="text-fourth text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
