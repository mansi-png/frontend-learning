import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function GitHubprofile() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    }

    GitHubprofile();
  }, []);

  return (
    <>
      <h1>GitHub Users</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "100px", height: "100px" }}
            />

            <p>{user.login}</p>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;