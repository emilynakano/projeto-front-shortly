import UserContext from "../../contexts/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
export function UserLinks (props) {
    const {newLink} = props;
    const [userLink, setUserLink] = useState([])
    const [atualization, setAtualization] = useState(false)
    const {user, setUser}= useContext(UserContext)
    useEffect(()=> {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://project-back-shortly.herokuapp.com/users/me', config)
        promise.then((res) =>{ 
            setUserLink(res.data)
            setUser({...user, name: res.data.name})
        })
        promise.catch(() => alert("nao deu"))
    }, [newLink, atualization])
    if(userLink.length === 0) {
        return <h1>loading</h1>
    }
    return (
        <div className="links">
        {userLink.shortenedUrls.map((link)=>
            <div className="link">
                <button>
                    <span>
                        {link.url}
                    </span>
                    <span >
                        <a onClick={()=> atualization ?setAtualization(false) : setAtualization(true)} href={"https://project-back-shortly.herokuapp.com/urls/open/" + link.shortUrl} target="blank">{link.shortUrl}</a>
                    </span>
                    <span>
                        Quantidade de visitantes: {link.visitCount}
                    </span>
                </button>
                <button className="trash">
                        <h1>oi</h1>
                </button>
            </div>
        )}
    </div>
    )
}