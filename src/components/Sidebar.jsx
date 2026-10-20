
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import electricalTopics from "../data/electricalTopics";

function Sidebar({ searchQuery }) {
  const [expanded, setExpanded] = useState([
    "fundamentals",
    "transformers",
    "motors"
  ]);

  const filteredCategories = electricalTopics
    .map((category) => ({
      ...category,
      topics: category.topics.filter((topic) =>
        `${topic.title} ${topic.description}`
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
      )
    }))
    .filter(
      (category) =>
        category.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        category.topics.length > 0
    );

  function toggleCategory(categoryId) {
    setExpanded((previous) =>
      previous.includes(categoryId)
        ? previous.filter((id) => id !== categoryId)
        : [...previous, categoryId]
    );
  }

  return (
    <aside className="sidebar">
      <h3>LEARN ELECTRICAL</h3>

      {filteredCategories.map((category) => {
        const isExpanded =
          expanded.includes(category.id) ||
          searchQuery.trim().length > 0;

        return (
          <section key={category.id} className="sidebar-section">
            <button
              className="category-button"
              onClick={() => toggleCategory(category.id)}
            >
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}

              <span>{category.title}</span>
            </button>

            {isExpanded && (
              <div className="topic-links">
                {category.topics.map((topic) => (
                  <NavLink
                    key={topic.id}
                    to={topic.path}
                    className={({ isActive }) =>
                      isActive ? "topic-link active" : "topic-link"
                    }
                  >
                    {topic.title}
                  </NavLink>
                ))}

                {category.topics.length === 0 && (
                  <p className="no-topics">No matching lessons</p>
                )}
              </div>
            )}
          </section>
        );
      })}

      {filteredCategories.length === 0 && (
        <p className="no-topics">No matching topics found.</p>
      )}
    </aside>
  );
}

export default Sidebar;
