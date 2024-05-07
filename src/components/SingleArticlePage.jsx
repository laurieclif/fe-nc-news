import { useParams } from "react-router"

function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    return (
        <section id="single-"></section>
    )
}

export default SingleArticlePage