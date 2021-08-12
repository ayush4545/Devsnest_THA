import { MoreHorizOutlined } from '@material-ui/icons'
import React from 'react'
import { postType } from '../App'
import "./css/Post.scss"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';
const Post = ({ post }: {post:postType}) => {
    const [isLiked,setIsLiked]=useState(false)
    return (
        <div className="card post" >
            <div className="card-header" >
                <h5 className="card-title">{post.username}</h5>
                <MoreHorizOutlined />
                
            </div>
            <img src={post.post} className="card-img-top" alt={post.username} />
            <div className="card-body">
                 <div className="left">
                     {isLiked ? <FavoriteIcon className="postIcon liked" onClick={()=>setIsLiked(false)}/> : <FavoriteBorderIcon className="postIcon" onClick={()=>setIsLiked(true)}/> }
                       
                       <ChatBubbleOutlineIcon className="postIcon"/>
                       <ShareIcon className="postIcon"/>
                 </div>
               
                <BookmarkBorderIcon className="postIcon"/>
                 
            </div>
        </div>
    )
}

export default Post
