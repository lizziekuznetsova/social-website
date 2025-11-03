import photo from '../sophie-profile.png'

export default function ProfileInfo(){
    return(
         <div className='prof_info'>
                <img className='prof_photo' src={photo} alt="" />
                <h2 className='user'>Sophie T</h2>
            </div>
    )
}