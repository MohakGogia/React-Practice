import { useState } from "react";
import TabButton from "../components/TabButton";
import { EXAMPLES } from "../data/data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();

    return (
        <Section title="Examples" id="examples">
          <Tabs 
            BtnContainerType="menu"
            buttons={
            <>
                <TabButton
                isSelectedTab={selectedTab === "components"}
                onClick={() => setSelectedTab("components")}
                >
                Components
                </TabButton>
                <TabButton
                isSelectedTab={selectedTab === "jsx"}
                onClick={() => setSelectedTab("jsx")}
                >
                JSX
                </TabButton>
                <TabButton
                isSelectedTab={selectedTab === "props"}
                onClick={() => setSelectedTab("props")}
                >
                Props
                </TabButton>
                <TabButton
                isSelectedTab={selectedTab === "state"}
                onClick={() => setSelectedTab("state")}
                >
                State
                </TabButton>
            </>
          }>
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
          </Tabs>
        </Section>
    );
}