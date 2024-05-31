import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇧🇷 PT-BR - Native Speaker</span>
          <span>🇺🇸 EN - Basic</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Software Developer - Universidade Estácio de Sá</span>
        </div>
      </div>
    )
}