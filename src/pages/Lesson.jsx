
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import electricalTopics from "../data/electricalTopics";

function Lesson() {
  const { topicId } = useParams();

  const allTopics = electricalTopics.flatMap((category) =>
    category.topics.map((topic) => ({
      ...topic,
      categoryTitle: category.title
    }))
  );

  const currentIndex = allTopics.findIndex(
    (topic) => topic.id === topicId
  );

  const topic = allTopics[currentIndex];

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} | ElectroNotes`;
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="lesson">
        <h1>Topic not found</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  const previousTopic = allTopics[currentIndex - 1];
  const nextTopic = allTopics[currentIndex + 1];

  const sections = topic.sections ?? [
    {
      id: "overview",
      heading: "Overview",
      body: topic.content ?? topic.description,
      formula: topic.formula
    }
  ];

  return (
    <article className="lesson">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        {" / "}
        {topic.categoryTitle}
        {" / "}
        {topic.title}
      </div>

      <h1>{topic.title}</h1>
      <p className="lesson-description">{topic.description}</p>

      <div className="lesson-actions">
        <span>
          <BookOpen size={16} />
          Technical notes
        </span>
      </div>

      <div className="lesson-body">
        <aside className="lesson-toc">
          <h3>On this page</h3>

          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.heading}
            </a>
          ))}
        </aside>

        <div className="lesson-main">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="lesson-section"
            >
              <h2>{section.heading}</h2>
              <p>{section.body}</p>

              {section.formula && (
                <div className="formula-box">
                  <strong>Formula / Example</strong>
                  <code>{section.formula}</code>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="lesson-navigation">
        {previousTopic ? (
          <Link to={previousTopic.path}>
            <ChevronLeft size={18} />
            Previous
          </Link>
        ) : (
          <span />
        )}

        {nextTopic && (
          <Link to={nextTopic.path}>
            Next
            <ChevronRight size={18} />
          </Link>
        )}
      </div>
    </article>
  );
}

export default Lesson;
