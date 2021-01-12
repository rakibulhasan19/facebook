import React, { Component } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="facebook logo"/>
                    <div className="header_input">
                        <SearchIcon/>
                        <input placeholder="Search Facebook" type="text"/>
                    </div>
                </div>
               <div className="header_center">
                    <div className="header_option header_option--active">
                        <HomeIcon 
                        fontsize="large"/>
                    </div> 
                    <div className="header_option">
                        <FlagIcon 
                        fontsize="large"/>
                    </div> 
                    <div className="header_option">
                        <SubscriptionsIcon 
                        fontsize="large"/>
                    </div>   
                    <div className="header_option">
                        <SupervisedUserCircleIcon 
                        fontsize="large"/>
                    </div> 
               </div>
                 
                <div className="header_right">
                    <div className="header_info">
                            <Avatar/>
                            <h4>Saimun</h4>
                        <div className="header_rigth_icon">
                            <AddIcon/>
                        </div>
                        <div className="header_rigth_icon">
                            <NotificationsIcon/>
                        </div>
                        <div className="header_rigth_icon">
                            <ForumIcon/>
                        </div>
                        <div className="header_rigth_icon">
                            <ExpandMoreIcon/> 
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default  Header;