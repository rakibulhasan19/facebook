import React from 'react'
import './Sidebar.css';
import SidebarRow from '../UI/SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fcgp13-1.fna.fbcdn.net/v/t1.0-9/121816013_2668487390059926_9152702185925839871_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFz_62ESUKxzG2JnOlK6GXzztWlH7JHAmLO1aUfskcCYniwfFE_aUSRtuD0kvgrkBayxHjEKd7Oyp57JEyws64H&_nc_ohc=ONCET4mAQQAAX92xYq8&_nc_ht=scontent.fcgp13-1.fna&oh=7bb47e108740f1f8c0de92d735546929&oe=6022CD3E" title="Saimun"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreIcon} title="Margetplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Vedios"/>
            <SidebarRow Icon={ExpandMoreIcon} title="More"/>
            
        </div>
    )
}
export default Sidebar;