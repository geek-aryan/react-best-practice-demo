import React from "react";
import useApi from "../hooks/useApi";

const About = () => {
  const { data: users, loading, error } = useApi("/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
