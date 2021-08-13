import BlogHighLight from './blogHighlight'
import TopHighlights from './topHighlights'
import YouTubeHighlight from './youTubeHighlight'

const HighlightsSection = ({ posts }) => {
    return (
        <div>
            <h3 className="mt-4">Highlights</h3>
            <TopHighlights />
            <BlogHighLight posts={posts} />
            <YouTubeHighlight />
        </div>
    )
}

export default HighlightsSection

