import { CORE_CONCEPTS } from "../../data.js";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import './CoreConceptsSection.css'

export default function CoreConceptsSection() {
  return (
    <section id="coreConcepts">
      <h2>Principales Características</h2>
      <div id="coreConceptsCards">
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcepts key={index} {...conceptItem} />
        ))}
      </div>
    </section>
  );
}
