import React,{useEffect,useState} from 'react'
import { eCommerceProfile } from '../../FetchFunc/fetchEcommerceProfile'

function Profile() {
    const [profileData, setProfileData] = useState("")

    async function getProfile(params) {
      const profile = await eCommerceProfile()
      setProfileData(profile?.data.data)
    }

    useEffect(() => {
        getProfile()
    }, [])

    console.log(profileData);
    
  return (
    <div className=''>
      { profileData &&
      <>
        <div>{profileData.firstName}</div>
        <div>{profileData.lastName}</div>
      </>
      }
    </div>
  )
}

export default Profile
