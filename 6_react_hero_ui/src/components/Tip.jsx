import React from 'react'
import {Accordion, AccordionItem} from "@heroui/react";

const Tip = () => {

    const defaultContent_1 =
    "Focus on progress, not perfection.";
    
    const defaultContent_2 =
    "Embrace failure as a lesson, not a setback.";

    const defaultContent_3 =
    "Surround yourself with people who lift you up.";
 
return (
    <>
        <Accordion>

        <AccordionItem className="text-center" key="1" aria-label="Tip 1" title="Tip 1">
            {defaultContent_1}
        </AccordionItem>

        <AccordionItem className="text-center" key="2" aria-label="Tip 2" title="Tip 2">
            {defaultContent_2}
        </AccordionItem>

        <AccordionItem className="text-center" key="3" aria-label="Tip 3" title="Tip 3">
            {defaultContent_3}
        </AccordionItem>
    
        </Accordion> 
    </>
  )
}

export default Tip