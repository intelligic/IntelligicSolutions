import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NavLink } from "react-router-dom";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";

const ServicePopup = ({ service }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group bg-transparent text-gray-800 text-2xl border rounded-md border-gray-600 px-2 py-1 lg:px-3 lg:py-2 font-bold flex items-center justify-center transition-transform duration-700 hover:scale-105">
          <PiArrowBendDoubleUpRightBold className="transition-transform+ duration-700 group-hover:rotate-45" />
        </button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[650px] flex flex-col justify-center items-center gap-3 p-4 sm:p-5 border rounded-md">
        <DialogHeader className="w-full text-center">
          <DialogTitle className="text-base sm:text-lg font-semibold capitalize tracking-wide text-black">
            {service.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Service details and enquiry options
          </DialogDescription>
        </DialogHeader>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-36 sm:h-65 md:h-45 object-cover rounded-md"
        />

        <DialogDescription className="text font-medium  leading-4 mf:leading-4 lg:leading-6 text-[#7A7A7A] text-center">
          {service.description}
        </DialogDescription>

        <NavLink
          to="/service_enquiry"
          className="bg-[#00AEEF] text-white font-bold px-4 py-2 rounded-md text-xs sm:text-sm hover:scale-105 hover:bg-blue-800 transition-transform duration-200"
        >
          Enquire Now
        </NavLink>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
