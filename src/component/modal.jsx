import { useState } from 'react'

const Modal = ({addIdea}) => {
    const [label, setLabel] = useState('')
    const [price, setPrice] = useState(0)
    const [comment, setComment] = useState('')

    return <div className="modal">
        <input type="text" placeholder="Chasse au chocolat d'Helene" value={label} onChange={(e) => setLabel(e.target.value)} />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <textarea type="text"
            placeholder="Le vaincueur aura le droit a une pizza de Kadiatou (les chats ne sont pas autoriser a participer)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
        <input type="button" value="Ajouter une idee" onClick={() => addIdea({label, price, comment})}/>
    </div>
}

export default Modal