import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const res = await fetch("http://localhost:8080/project", {
        credentials: "include",
      });

      if (res.status === 401) {
        window.location.href = "http://localhost:8080/ttAuth";
        return;
      }

      const data = await res.json();
      setProjects(data);
    }

    getProjects();
  }, []);

  return (
    <>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      JEJE
    </>
  );
}

export default App;
