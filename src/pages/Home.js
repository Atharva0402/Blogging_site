import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase-config'


function Home(isAuth) {

    const [postLists, setPostList] = useState([])
    const postCollectionRef = collection(db, "post");




    const deletePost = async (id) => {
        const postDoc = doc(db, "post", id);//three paramaters database,name of the collection and the id of the document;
        await deleteDoc(postDoc) // this method require u to mention what document to delte 
        // it takes it as parameters


    }




    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef)
            // const postCollectionRef = collection(db, "post");
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    });
    return (
        <div
            className="homepage"
            style={{
                width: '100%',
                minHeight: 'calc(100vh - 80px)',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '20px',
            }}
        >
            {postLists.map((post) => (
                <div
                    className="post"
                    key={post.id}
                    style={{
                        width: '600px',
                        height: 'auto',
                        maxHeight: '600px',
                        backgroundColor: 'rgb(250, 250, 250)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        margin: '20px',
                        padding: '20px',
                        borderRadius: '15px',
                    }}
                >
                    <div className="postHeader">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="deletePost">
                            {isAuth && post.author.id === auth.currentUser.uid && (
                                <button
                                    onClick={() => {
                                        deletePost(post.id);
                                    }}
                                >
                                    {" "}
                                    &#128465;
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="postTextContainer">{post.postText}</div>
                    <h3>@{post.author.name}</h3>
                </div>
            ))}
        </div>

    );




}
export default Home;