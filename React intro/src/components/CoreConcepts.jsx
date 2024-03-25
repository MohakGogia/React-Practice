import Concept from "../components/Concept";
import { CORE_CONCEPTS } from "../data/data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Concept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
    );
}