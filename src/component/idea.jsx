const Idea = ({ idea, toggleVote }) => {
    
    
    return <div className='ideaWrapper'>
        <input type="checkBox"  defaultChecked={idea.voted} onChange={toggleVote} />
        <span>{idea.label}</span>
        <span>{idea.price}</span>
        <span>{idea.date}</span>
        <span>{idea.voteCount}</span>
    </div>
}

export default Idea