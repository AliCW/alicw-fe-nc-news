import { useState, useEffect } from 'react';
import * as api from '../api'
import { Link } from "react-router-dom"

export default function SignupSuccessfull(userData) {
  const [isLoading, setIsLoading] = useState(true)
  const [signupError, setSignupError] = useState(false)
  const checkData = {...userData}
  const defaultImage = "https://e7.pngegg.com/pngimages/369/132/png-clipart-man-in-black-suit-jacket-chris-hansen-to-catch-a-predator-television-show-nbc-news-chris-benoit-miscellaneous-television.png"

  if (userData.avatar_url === '') {
    checkData.avatar_url += defaultImage
  }
  console.log('here -atemt')
  useEffect(() => {
    setIsLoading(true)
    api.userSignUp(checkData).then(({data}) => {
      setIsLoading(false)
    }).catch(() => {
      setSignupError(true)
    })
   }, []
  )
  

  if (isLoading) return <p className="loading">Loading...</p>
  if (signupError) return <p>Error signing up, please refresh & try again</p>



  return (
    <div>
      <h3>Sign Up Successfull</h3>
      <p>Click the link below to sign in</p>
      <Link to="/login">Login</Link>
    </div>
  )
}  