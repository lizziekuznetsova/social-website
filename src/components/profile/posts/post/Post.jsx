import photo from '../../sophie-profile.png'

export default function Post(props){
    return(
        <div className='post'>
                    <img className='small_photo' src={photo} alt="" />
                    <span className='user_post'>Sophie T</span>
                    <p className='post_text'>{props.message}</p>
                    <span className='postLikes'>{props.likes}</span>
                </div>
    )
}