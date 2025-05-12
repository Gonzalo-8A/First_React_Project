import { useState } from "react";
import TabButton from "../TabButton/TabButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";
import Section from "../Section/Section.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import "./ExamplesSection.css";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState("default");

  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Ejemplos React" id="reactExamples">
      <TabsMenu
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClickMenu("components")}
            >
              Componentes
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClickMenu("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClickMenu("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClickMenu("state")}
            >
              Estados
            </TabButton>
          </>
        }
      >
        <TabContent selectedTopic={selectedTopic} />
      </TabsMenu>
    </Section>
  );
}
