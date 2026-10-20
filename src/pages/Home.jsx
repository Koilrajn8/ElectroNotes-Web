import electricalTopics from "../data/electricalTopics";

function Home() {
  return (
    <div>
      <h1>Electrical Knowledge Hub</h1>

      <p>Your personal electrical engineering reference.</p>

      <div className="card-container">
        {electricalTopics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.title}</h3>

            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;