import React, { useState } from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from "react-icons/md"

import data from "../../utils/accordion";
import "./Value.css"

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">

            {/* left-section */}
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt='' />
                </div>
            </div>

            {/* right-section */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we Give to You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for you.
                    <br />
                    We believe a good place to live can make your life better
                </span>

                <Accordion className="accordion"
                allowMultipleExpanded={false} preExpanded={[0]} 
                >
                    {
                        data.map((item,i) => {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem
                                className= {`accordionItem ${className}`} key={i} uuid={i}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionbutton'>
                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded"): setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon d1">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon d2">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>

        </div>
    </section>
  )
}

export default Value