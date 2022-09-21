import React from 'react'

const DisplayPosts = (props) => {
    return (
        <div>
            {props.posts.map( (post, i) =>
                <p key={i}>{post.user}, {post.content}</p>
            )}
        </div>
    )
}

export default DisplayPosts