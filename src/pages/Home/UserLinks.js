import UserContext from "../../contexts/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
export function UserLinks (props) {
    const {newLink} = props;
    const [userLink, setUserLink] = useState([])
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
    }, [newLink])
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
                    <span>
                        {link.shortUrl}
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