import React, { useState, useEffect } from "react"
import axios from "axios"

const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>FriendsList</h1>
            <ul>

                {
                    friends.map(friend => {
                        return (<li>{friend.name} - {friend.age} - {friend.email}</li>)
                    })
                }

                {/* <li>Name - age - Email</li>
                <li>Name - age - Email</li>
                <li>Name - age - Email</li>
                <li>Name - age - Email</li> */}
            </ul>
        </div>)
}

export default FriendsList;