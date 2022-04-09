const Cell = ({day, handleClick}) => {
    return <div
            className='cell'
            onClick={handleClick}>
        {day}
    </div>
}

export default Cell;