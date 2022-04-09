import '../style/global.scss';
import {useState, useEffect} from 'react'
import Idea from '../component/idea';
import Modal from '../component/modal'

const tmp = [
    {
        id: 0,
        label: 'test',
        price: 10,
        comment: '',
        date: '2022-03-30',
        voted: false,
        voteCount: 3,
    },
    {
        id: 1,
        label: 'test',
        price: 10,
        comment: '',
        date: '2022-03-31',
        voted: true,
        voteCount: 5,
    },
    {
        id: 2,
        label: 'pattate',
        price: 10,
        date: '2022-03-29',
        comment: '',
        voted: false,
        voteCount: 1,
    }
]

const Home = () => {
    const [ideas, setIdeas] = useState(tmp)
    const [filteredIdeas, setfilteredIdeas] = useState(ideas)
    const [sort, setSort] = useState('label')
    const [reverseSort, setReverseSort] = useState(false)
    const [modal, setModal] = useState(false)
    const [search, setSearch] = useState('')

    const sortIdeas = (sortBy) => {
        let sorted = ideas.sort((a, b) => a[sortBy] - b[sortBy])

        if (sortBy === sort) {
            setReverseSort(!reverseSort)
        } else {
            setSort(sortBy)
            setReverseSort(false)
        }

        setIdeas(reverseSort ? [...sorted.reverse()] : [...sorted])
    }

    const addVote = (id) => {
        const index = ideas.findIndex(idea => idea.id === id)
        const ideasForVote = [...ideas]
        ideasForVote[index] = {
            ...ideasForVote[index],
            voted: !ideasForVote[index].voted,
            voteCount: ideasForVote[index].voted ? ideasForVote[index].voteCount - 1 : ideasForVote[index].voteCount + 1,
        }
        setIdeas([...ideasForVote])
    }

    const addNewIdea = (newIdea) => {
        setIdeas([
            ...ideas,
            {
                ...newIdea,
                date: new Date().toLocaleDateString(),
            }
        ])
    }

    useEffect(() => {
        const reg = new RegExp(search.replace(/\w/g, '$&.*'))
        setfilteredIdeas(ideas.filter(idea => reg.test(idea.label)))
    }, [ideas, search])
        

    return <div className="tabIdeaWrapper">
        <div>
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Recherche"
            />
            <input type="button" value='Ajouter une idee' onClick={() => setModal(true)}/>
        </div>
        <div className='legendWrapper'>
            <span>
                <span>votez</span>
            </span>
            <span onClick={() => sortIdeas('label')}>
                <span>idee</span>
                <img src="" alt="" />
            </span>
            <span
                onClick={() => sortIdeas('price')}
            >
                <span>prix</span>
                <img src="" alt="" />
            </span>
            <span onClick={() => sortIdeas('date')}>
                <span>date d'ajout</span>
                <img src="" alt="" />
            </span>
            <span onClick={() => sortIdeas('voteCount')}>
                <span>nombre de vote</span>
                <img src="" alt="" />
            </span>
        </div>
        <div>
            { filteredIdeas.map(idea => {
                return <Idea
                key={idea.id}
                idea={idea}
                toggleVote={() => addVote(idea.id)}
                />
        })}
        </div>
            {modal ? <>
            <Modal
                addIdea={addNewIdea}
            />
                <div
                    onClick={() => setModal(false)}    
                    className="modalBackground" />
            </>
            : null}
    </div>
}


export default Home