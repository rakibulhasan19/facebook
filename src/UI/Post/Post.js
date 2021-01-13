import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Post = ({profilePic,imgName,username,timestamp,message}) => {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    <div className="post_potions">
                        <div className="post_potion">
                            <ThumbUpIcon/>
                            <p>Like</p>
                        </div>
                        <div className="post_potion">
                            <ChatBubbleOutlineIcon/>
                            <p>Comment</p>
                        </div>
                        <div className="post_potion">
                            <NearMeIcon/>
                            <p>Share</p>
                        </div>
                        <div className="post_potion">
                            <AccountCircleIcon/>
                            <ExpandMoreIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;
