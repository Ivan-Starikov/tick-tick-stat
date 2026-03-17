import { useEffect, useState } from "react";
import { Card } from "@/components/Card";

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
    <div className="mx-auto max-w-4xl">
      <header className="my-5">
        <h1>Better Statistics</h1>
      </header>
      <main>
        <Card title="Time Overview">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
}

export default App;
