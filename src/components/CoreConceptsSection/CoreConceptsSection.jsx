import { CORE_CONCEPTS } from "../../data.js";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import Section from "../Section/Section.jsx";
import "./CoreConceptsSection.css";

export default function CoreConceptsSection() {
  return (
    <Section title={"Principales Caracterísitcas"} id={"coreConcepts"}>
      <div id="coreConceptsCards">
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcepts key={index} {...conceptItem} />
        ))}
      </div>
    </Section>
  );
}
