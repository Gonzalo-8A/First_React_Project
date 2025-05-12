import { useState } from "react";
import TabButton from "../TabButton/TabButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";
import Section from "../Section/Section.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import { EXAMPLES } from "../../data.js";
import "./ExamplesSection.css";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const buttonsList = Object.values(EXAMPLES)
    .filter((_, index) => index !== 0)
    .map((button) => (
      <TabButton
        isSelected={selectedTopic === button.key}
        onClick={() => handleTabSelect(button.key)}
        key={button.key}
      >
        {button.title}
      </TabButton>
    ));

  return (
    <Section title="Ejemplos React" id="reactExamples">
      <TabsMenu ButtonsContainer="menu" buttons={buttonsList}>
        <TabContent selectedTopic={selectedTopic} />
      </TabsMenu>
    </Section>
  );
}
