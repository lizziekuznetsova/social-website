import photo from './sophie-profile.png'
import Posts from './posts/Posts'


export default function Profile(props){
    return(
        <div className="profile">
            <div className='prof_info'>
                <img className='prof_photo' src={photo} alt="" />
                <h2 className='user'>Sophie T</h2>
            </div>
           <Posts postsData={props.postsData}/>
           
        </div>
    )
}