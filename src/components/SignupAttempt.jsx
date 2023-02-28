import { useState, useEffect } from 'react';
import * as api from '../api'

export default function SignupSuccessfull(userData) {

  //console.log(userData)

  let checkData = {...userData}
  const defaultImage = "https://e7.pngegg.com/pngimages/369/132/png-clipart-man-in-black-suit-jacket-chris-hansen-to-catch-a-predator-television-show-nbc-news-chris-benoit-miscellaneous-television.png"

  if (userData.avatar_url === '') {
    checkData.avatar_url += defaultImage
  }

  console.log(checkData, 'right here, rigth now')

  useEffect(() => {

    api.userSignUp(checkData).then(({data}) => {
      console.log(data)
    })

  })

  // if (userData.avatar_url.length > 0) {
  //   const { username, name, password } = userData
  // } else {
  //   const { username, name, password, avatar_url } = userData
  // }

  // console.log(username, name, password, avatar_url, '<<<<<')

  // useEffect(() => {

  //     api.userSignUp(username, name, password, avatarURL).then(({data}) => {
  //       console.log(data)
  //     })
  
  //   })

  return (
    <div>
      <p>Sign Up Successfull</p>
    </div>
  )

}  
  
  
  
  
  
  