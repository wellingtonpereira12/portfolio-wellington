import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>2 years working as a Software Developer, in companys such as Loghaus.</p>
          <div className="experience-time">
            <Skill image="/dephi.png" measure={3} years="2 years"/>
            <Skill image="/oracle.png" measure={3} years="2 year"/>
            <Skill image="/ts.png" measure={2} years="1 years"/>
            <Skill image="/js.png" measure={2} years="1 years"/>        
          </div>
        </div>
    )
}