import { LevelUpModal } from '../components/LevelUpModal/LevelUpModal';
import stylesExperience from '../styles/components/ExperienceBar.module.css'
import stylesProfile from '../styles/components/Profile.module.css'
import styleLevelupModal from '../styles/components/levelupModal.module.css'


function getStyles(){
  const {experienceBar,currentExperience } =  stylesExperience 
  const {containerModal, overlay} =   styleLevelupModal
  const {profileContainer} = stylesProfile
  

  const styles = {
    experience: { 
      experienceBar,
      currentExperience
   },
    profile: {
      profileContainer
   },
   
    LevelUpModal: {
      containerModal,
      overlay
    }
  
  }

  return styles

}

export const style = getStyles()
