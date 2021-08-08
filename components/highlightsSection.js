import BlogHighLight from './blogHighlight'
import TopHighlights from './topHighlights'

const HighlightsSection = ({ posts }) => {
    return (
        <div>
            <h3 className="mt-4">Highlights</h3>
            <TopHighlights />
            <BlogHighLight posts={posts} />
        </div>
    )
}

export default HighlightsSection

