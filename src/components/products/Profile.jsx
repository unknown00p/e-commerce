import React,{useEffect,useState} from 'react'
import { eCommerceProfile } from '../../FetchFunc/fetchEcommerceApi'

function Profile() {
    const [profile, setProfile] = useState("")

    async function getProfile(params) {
      const profile = await eCommerceProfile()
      console.log(profile.data.data);
      setProfile(profile.data.data)
    }

    useEffect(() => {
        getProfile()
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Profile
