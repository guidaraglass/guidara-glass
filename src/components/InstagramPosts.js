import React, { useEffect, useState } from 'react';
import InstagramPost from './InstagramPost';
import { config } from '../config';

const InstagramPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${config.accessToken}`);
                const data = await response.json();
                setPosts(data.data.filter((post) => post.media_type !== 'VIDEO'));
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <InstagramPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default InstagramPosts;