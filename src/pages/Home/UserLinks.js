import UserContext from "../../contexts/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { Rings } from  'react-loader-spinner'

export function UserLinks (props) {
    const [loading, setLoading] = useState(false)
    const {newLink} = props;
    const [userLink, setUserLink] = useState([])
    const [atualization, setAtualization] = useState(true)
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
        return <Rings color="black" height={80} width={900} />
    }
    async function DeleteUrl(props) {
        setLoading(true)
        const id = props;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        try {
            await axios.delete(`https://project-back-shortly.herokuapp.com/urls/${id}`, config);
            atualization ? setAtualization(false) : setAtualization(true)
            setLoading(false)
        } catch {
            alert("erro ao deleter")
            setLoading(false)
        }
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
                        <a onClick={()=> atualization ? setAtualization(false) : setAtualization(true)} href={"https://project-back-shortly.herokuapp.com/urls/open/" + link.shortUrl} target="blank">{link.shortUrl}</a>
                    </span>
                    <span>
                        visitantes: {link.visitCount}
                    </span>
                </button>
                <button className="trash">
                    {loading ? <Rings color="red" height={80} width={70} /> :
                    <ion-icon onClick={() => DeleteUrl(link.id)} class="trash-icon" name="trash-outline"></ion-icon>
                    }
                </button>
            </div>
        )}
    </div>
    )
}