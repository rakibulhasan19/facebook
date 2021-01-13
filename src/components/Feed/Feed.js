import React from 'react'
import StoryReel from '../../UI/StoryReel/StoryReel';
import MessageSender from '../../UI/MessageSender/MessageSender'
import Post from '../../UI/Post/Post';
const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
              profilePic=''  
              message="yoo this is a message"
              timestamp="1621414224"
              imgName=""
              username="Saimun"
            
            />
            
        </div>
    )
}
export default Feed;