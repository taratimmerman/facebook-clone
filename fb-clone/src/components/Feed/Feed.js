import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic='https://avatars.githubusercontent.com/u/42617001?s=460&u=009e72391064be844aa51ed629a8cdd50b400166&v=4'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='Tara Timmerman'
                image='https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
            />
            <Post
                profilePic='https://avatars.githubusercontent.com/u/42617001?s=460&u=009e72391064be844aa51ed629a8cdd50b400166&v=4'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='Tara Timmerman'
            />
            <Post />
        </div>
    )
}

export default Feed
