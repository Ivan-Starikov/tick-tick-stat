import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   checkAuth();
  // });

  const getProjects = async () => {
    const res = await fetch("http://localhost:8080/project", {
      credentials: "include",
    });

    const data = await res.json();
    setProjects(data);
  };

  async function checkAuth() {
    const res = await fetch("http://localhost:8080/auth-status", {
      credentials: "include",
    });

    const data = await res.json();

    if (!data.authenticated) {
      window.location.href = "http://localhost:8080/auth/login";
    } else {
      getProjects();
    }
  }

  return (
    <>
      <ul>
        {/* {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}*/}
      </ul>
      JEJE
    </>
  );
}

export default App;
