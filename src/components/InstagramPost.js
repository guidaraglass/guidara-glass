import React from 'react';

const InstagramPost = ({ post }) => {
    return (
        <div className="instagram-post" onClick={() => console.log(post.permalink)}>
            <img src={post.media_url} alt="Instagram " className="instagram-post-photo" />
            <p>{post.caption}</p>
        </div>
    );
};

export default InstagramPost;