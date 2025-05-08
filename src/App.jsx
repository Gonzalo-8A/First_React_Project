import { useEffect } from 'react'
import  Header  from "./components/Header/Header.jsx";
import CoreConceptsSection from './components/CoreConceptsSection/CoreConceptsSection.jsx';
import ExamplesSection from './components/ExamplesSection/ExamplesSection.jsx';
import "./App.css";

function App() {

  useEffect(() => {
    window.scrollTo({
      top: 70,
      behavior: 'auto'
    });
  }, []);

  // useEffect(() => {
  //   if (selectedTopic && contentRef.current) {
  //     contentRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [selectedTopic]);
  
  return (
    <>
      <Header />
      
      <CoreConceptsSection />

      <ExamplesSection />

      {/* <main>
        <h2></h2>
      </main> */}
    </>
  );
}

export default App;
