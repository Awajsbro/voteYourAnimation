import '../style/global.scss'
import {useState} from 'react'
import moment from 'moment'
import Cell from '../component/cell'
import leftArrow from '../icon/left-arrow.png'
import rightArrow from '../icon/right-arrow.png'

const Calendar = () => {
    const [month, setMonth] = useState(moment().month())
    const [year, setYear] = useState(moment().year())

    const cellGenerator = () => {
        const begin = moment().set({ 'date': 1, 'month': month, 'year': year })
        const end = moment().set({ 'date': 0, 'month': month + 1, 'year': year })
        begin.subtract(begin.weekday() % 7, 'd')
        const diff = end.diff(begin, 'd')
        console.log('diff',diff)
        console.log('avant',end.toString(), end.weekday())
        end.add(6 - (diff % 7), 'd')
        console.log('apres',end.toString(), end.weekday())
        
        const html = []
        for (; begin.isSameOrBefore(end); begin.add(1, 'd')) {
            html.push(
                <Cell
                    day={begin.date()}
                    handleClick={() => console.log(begin.date())}
                />
            )
            if (html.length > 50)
                break
        }
        return html
    }

    const dayOfWeekGenerator = () => {
        const html = []
        for (let i = 0; i < 7; i++) {
            html.push(<span>{ moment().weekday(i).format('dddd') }</span>)
        }
        return html
    }

    return <div className="calendarWrapper">
        <div className='monthSelectorWrapper'>
            <img
                className='calendarArrow'
                src={leftArrow}
                alt="previous month"
                onClick={() => setMonth(month - 1)}
            />
            <div>
                {moment().month(month).format('MMMM')} {year}
            </div>
            <img
                className='calendarArrow'
                src={rightArrow}
                alt="next month"
                onClick={() => setMonth(month + 1)}
            />
        </div>
        <div className="cellWrapper">
            {dayOfWeekGenerator()}
        </div>
        <div className='cellWrapper'>
            {cellGenerator()}
        </div>
    </div>
}

export default Calendar;