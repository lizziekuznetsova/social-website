
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';


export default function Profile(props){
    return(
        <div className="profile">
            {/* <div className='prof_info'>
                <img className='prof_photo' src={photo} alt="" />
                <h2 className='user'>Sophie T</h2>
            </div> */}
            <ProfileInfo/>
           <Posts onPostChange={props.onPostChange} posting={props.posting} postsData={props.postsData} addPost={props.addPost}/>
        
           
        </div>
    )
}