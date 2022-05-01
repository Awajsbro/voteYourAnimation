import {useState} from 'react'

const Profile = () => {
    const [actualPassword, setActualPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')

    const handleChangePassword = () => {
        if (newPassword === repeatNewPassword)
            console.log("c'est le moment ou l'on est sense changer la mdp")
    }

    return <div>
        <div>==== Mots de passe oublier ====</div>
        <div>Ancien mot de passe</div>
        <input type="password" onChange={e => setActualPassword(e.event.target)}/>
        <div>Nouveau mot de passe</div>
        <input type="password" onChange={e => setNewPassword(e.event.target)}/>
        <div>Repetez le nouveau mot de passe</div>
        <input type="password" onChange={e => setRepeatNewPassword(e.event.target)} />
        <br />
        <input type="button" value='Changer de mot ded passe' onClick={handleChangePassword} />
    </div>

}

export default Profile