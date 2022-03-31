const Idea = ({idea}) => {
    return <div>
    <span>{idea.label}</span>
    <span>{idea.price}</span>
    <span>{idea.date}</span>
</div>
}

export default Idea