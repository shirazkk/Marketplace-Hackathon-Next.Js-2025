import { ShieldCheck } from "lucide-react";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

const achievementsData = [
  {
    id: 1,
    icon: <GiTrophyCup className="text-5xl text-primary" />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    id: 2,
    icon: <ShieldCheck className="scale-150 text-primary" />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    id: 3,
    icon: <MdOutlineSupportAgent className="text-5xl text-primary" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Achievements = () => {
  return (
    <div className="w-full h-auto md:h-[270px] mb-20 md:mb-0">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full bg-third flex-col md:gap-0 gap-10 md:flex-row flex justify-between items-center max-w-[1500px] mx-auto md:py-0 py-10">
        {achievementsData.map((item) => (
          <div key={item.id} className="flex items-center gap-4 px-10">
            {item.icon}
            <div>
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-fourth text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
