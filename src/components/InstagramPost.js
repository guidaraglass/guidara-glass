import React from 'react';

const linkHashtags = (caption) => {
    return caption.replace(/#[a-zA-Z0-9]*/g, (match) => `<a href="https://www.instagram.com/explore/tags/${match.substring(1)}" target="_blank" rel="noopener noreferrer" class="App-link"><strong>${match}</strong></a>`);
};

const linkAccountNames = (caption) => {
    return caption.replace(/@[a-zA-Z0-9.]*/g, (match) => `<a href="https://www.instagram.com/${match.substring(1)}" target="_blank" rel="noopener noreferrer" class="App-link"><strong>${match}</strong></a>`);
};

const linkLinks = (caption) => {
    return caption.replace(/(https?:\/\/[^\s]+)/g, (match) => `<a href="${match}" target="_blank" rel="noopener noreferrer" class="App-link">${match}</a>`);
};

const createCaptions = (caption) => {
    const linkedLinks = linkLinks(caption);
    const linkedHashtags = linkHashtags(linkedLinks);
    const linkedAccountNames = linkAccountNames(linkedHashtags);
    
    return linkedAccountNames;
}

const InstagramPost = ({ post, index }) => {
    const caption = createCaptions(post.caption);

    return (
        <div className="instagram-post">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label="Link to Instagram post">
                <img src={post.media_url} alt="Stained glass" className="instagram-post-photo" aria-describedby={`caption-${index}`} />
            </a>
            <div dangerouslySetInnerHTML={{__html: caption}} className="instagram-post-caption" id={`caption-${index}`}></div>
        </div>
    );
};

export default InstagramPost;