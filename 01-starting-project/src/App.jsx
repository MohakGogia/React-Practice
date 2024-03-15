import { useState } from "react";
import Concept from "./components/Concept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Concept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelectedTab={selectedTab === "components"}
              onSelect={() => setSelectedTab("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelectedTab={selectedTab === "jsx"}
              onSelect={() => setSelectedTab("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelectedTab={selectedTab === "props"}
              onSelect={() => setSelectedTab("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelectedTab={selectedTab === "state"}
              onSelect={() => setSelectedTab("state")}
            >
              State
            </TabButton>
          </menu>
          {selectedTab ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab]?.title}</h3>
              <p>{EXAMPLES[selectedTab]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab]?.code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a tab first!</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
