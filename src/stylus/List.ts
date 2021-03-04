import stylesProfile from '../styles/components/Profile.module.css'


function getStyles(){
  const {profileContainer} = stylesProfile
  

  const styles = {
   
    profile: {
      profileContainer
   },
   
   
  
  }

  return styles

}

export const style = getStyles()
