import { useState } from "react";
import TabButton from "../TabButton/TabButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";
import Section from "../Section/Section.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import { EXAMPLES } from "../../data.js";
import "./ExamplesSection.css";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Ejemplos React" id="reactExamples">
      <TabsMenu
        buttons={Object.values(EXAMPLES)
          .filter((_, index) => index !== 0)
          .map((button) => (
            <TabButton
              isSelected={selectedTopic === button.key}
              onClick={() => handleClickMenu(button.key)}
              key={button.key}
            >
              {button.title}
            </TabButton>
          ))}
      >
        <TabContent selectedTopic={selectedTopic} />
      </TabsMenu>
    </Section>
  );
}
