import { useState, useEffect } from "react"
import { fetchTopics } from "./api"
import TopicCard from "./TopicCard"

function TopicList() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetchTopics().then((res) => {
            setTopics(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <section>
            <h2>Topics</h2>
            <ul id="vertical-list">
                {topics.map((topic) => {
                    return (
                        <TopicCard className="topic-card" key={topic.slug} topic={topic} slug={topic.slug}></TopicCard>
                    )
                })}
            </ul>
        </section>
    )
}

export default TopicList