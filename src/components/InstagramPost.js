import React from 'react';

const InstagramPost = ({ post }) => {
    const boldedHashtags = post.caption.replace(/#[a-zA-Z0-9]*/g, (match) => `<strong>${match}</strong>`);

    return (
        <div className="instagram-post" onClick={() => window.open(post.permalink, '_blank')}>
            <img src={post.media_url} alt="Instagram " className="instagram-post-photo" />
            <div dangerouslySetInnerHTML={{__html: boldedHashtags}}></div>
        </div>
    );
};

export default InstagramPost;