import { Link } from "react-router-dom"

function TopicCard({topic, slug}) {

    return (
        <Link className="link" to={`/topics/${slug}/articles`} topic={topic} slug={slug}>
        <section>
            <h2 slug={slug}>{slug}</h2>
            <h3>{topic.description}</h3>
        </section>
        </Link>
    )
}

export default TopicCard