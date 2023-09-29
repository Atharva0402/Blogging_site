import React, { useState, useEffect, useDeferredValue } from "react";

import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config';
import { useNavigate, useRouteLoaderData } from "react-router-dom";

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("")
    const postCollectionRef = collection(db, "post");
    let navigate = useNavigate();

    const createPost = async () => {
        // this take multiple parameteres
        //  first is post other for u ser 
        // this also need a refrence to which db it is pointing 
        await addDoc(postCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },

        });
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);
    return (
        <div className="createPostPage">
            <div
                className="cpContainer"//c= create p = post cpContainer
            >
                <h1>Create a Post</h1>
                <div className='inputGp'>
                    <label> Title:</label>
                    <input
                        placeholder="Title.."
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>
                <div className='inputGp'>
                    <label> Post:</label>
                    <textarea
                        placeholder="Post..  "
                        onChange={(event) => { setPostText(event.target.value) }}
                    />
                </div>
                <button onClick={createPost}>Submit Post</button>

            </div>

        </div>
    )
}


export default CreatePost;