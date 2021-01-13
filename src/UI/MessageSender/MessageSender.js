import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css'

const MessageSender = () => {
 const [input, setInput] = useState('');
 const [image,setImage] = useState(null);

 const handleChange=(e)=>{
     if(e.target.files[0]){
         setImage(e.target.files[0])
     }
 }
 const handleSubmit=(e)=>{
     e.preventDefault()
    console.log('submitting')
 }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src="https://scontent.fcgp13-1.fna.fbcdn.net/v/t1.0-9/121816013_2668487390059926_9152702185925839871_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFz_62ESUKxzG2JnOlK6GXzztWlH7JHAmLO1aUfskcCYniwfFE_aUSRtuD0kvgrkBayxHjEKd7Oyp57JEyws64H&_nc_ohc=ONCET4mAQQAAX92xYq8&_nc_ht=scontent.fcgp13-1.fna&oh=7bb47e108740f1f8c0de92d735546929&oe=6022CD3E"/>
                <form>
                    <input 
                    type="text" 
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                    className="messageSender_input" 
                    placeholder="What's on your mind?"/>
                    <input 
                    type="file" 
                    onChange={handleChange}
                    value={image}
                    className="messageSender_file"/>
                    <button 
                    onClick={handleSubmit}
                    type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
export default MessageSender;
