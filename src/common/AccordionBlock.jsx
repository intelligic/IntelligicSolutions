import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionBlock = (props) => {
  const {
    data,
    defaultOpen = "item-1",
    className = "",
  } = props;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen}
      className={`w-full flex flex-col gap-3 ${className}`}
    >
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="w-full"
        >
          <AccordionTrigger
            className="
              subHeading
              border border-gray-300
              bg-[#ececec]
              text-black
              hover:bg-[#61BBD6]
              data-[state=open]:bg-[#377285]
              data-[state=open]:text-white
              transition-colors
              duration-300
              tracking-wider
            "
          >
            {item.title}
          </AccordionTrigger>

          <AccordionContent className="bg-white p-4 rounded-sm">
            <p className="mainParagraph text-start text-[14px]">
              {item.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionBlock;
