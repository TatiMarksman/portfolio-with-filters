import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import Portfolio from "./components/Portfolio";

const projects = [
  { img: "https://i.ibb.co/0j7hT7j/project1.jpg", category: "Websites" },
  { img: "https://i.ibb.co/F0nCJxb/project2.jpg", category: "Flayers" },
  { img: "https://i.ibb.co/gFq9wHb/project3.jpg", category: "Business Cards" },
  { img: "https://i.ibb.co/X2k5CYb/project4.jpg", category: "Websites" },
  { img: "https://i.ibb.co/pvfPvPf/project5.jpg", category: "Flayers" },
  { img: "https://i.ibb.co/nDDMfNY/project6.jpg", category: "Business Cards" },
];

function App() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="App">
      <h1>Portfolio with Filters</h1>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => setSelected(filter)}
      />
      <Portfolio projects={filteredProjects} />
    </div>
  );
}

export default App;
