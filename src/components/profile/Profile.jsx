import photo from './sophie-profile.png'

export default function Profile(){
    return(
        <div className="profile">
            <div className='prof_info'>
                <img className='prof_photo' src={photo} alt="" />
                <h2 className='user'>Sophie T</h2>
            </div>
            <div className='posts'>
                <input className='type' type="text" />
                <button className='btn'>Add Post</button>
                <div className='post'>
                    <img className='small_photo' src={photo} alt="" />
                    <span className='user_post'>Sophie T</span>
                    <p className='post_text'>Hello</p>
                </div>
            </div>

        </div>
    )
}