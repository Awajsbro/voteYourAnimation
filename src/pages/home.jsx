import '../style/global.css';
import {useState} from 'react'
import Idea from '../component/idea';

const tmp = [
    {
      label: 'test',
      price: 10,
      date: '2022-03-31'
    },
    {
        label: 'test',
        price: 10,
        date: '2022-03-31'
    },
    {
        label: 'pattate',
        price: 10,
        date: '2022-03-31'
    }
  ]

const Home = () => {
    const [ideas, setIdeas] = useState(tmp)
    const [sort, setSort] = useState('label')
    const [reverseSort, setReverseSort] = useState(false)
    const [search, setSearch] = useState('')

    const sortIdeas = (sortBy) => {
        let sorted = ideas.sort((a, b) => a[sortBy] - b[sortBy])

        if (sortBy === sort) {
            setReverseSort(!reverseSort)
        } else {
            setSort(sortBy)
        }

        if (reverseSort) 
            sorted.reverse()
        setIdeas([...sorted])
    }

    const filteredIdea = () => {
        const reg = new RegExp(search.replace(/\w/g, '$&.*'))
        console.log(reg.test(ideas[0].label))
        return sortedIdeas.filter(idea => reg.test(idea.label)).map(idea => {
            return <Idea
                idea={idea}
            />
        })
    } 

    return <div className="tabIdeaWrapper">
        <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Recherche"
        />
        <div>
            <span onClick={() => sortIdeas('label')}>
                <span>idee</span>
                <img src="" alt="" />
            </span>
            <span onClick={() => sortIdeas('price')}>
                <span>prix</span>
                <img src="" alt="" />
            </span>
            <span onClick={() => sortIdeas('date')}>
                <span>date d'ajout</span>
                <img src="" alt="" />
            </span>
        </div>
        <div>
            {filteredIdea()}
        </div>

    </div>
}


export default Home