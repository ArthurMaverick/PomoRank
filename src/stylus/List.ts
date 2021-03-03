import { LevelUpModal } from '../components/LevelUpModal/LevelUpModal';
import stylesExperience from '../styles/components/ExperienceBar.module.css'
import stylespageHome from '../styles/pages/Home.module.css'
import stylesProfile from '../styles/components/Profile.module.css'
import stylesCompletedChallengers from '../styles/components/CompletedChallengers.module.css'
import stylesCountDown from '../styles/components/CountDown.module.css'
import styleChallengeBox from '../styles/components/challengeBox.module.css'
import styleLevelupModal from '../styles/components/levelupModal.module.css'


function getStyles(){
  const {experienceBar,currentExperience } =  stylesExperience 
  const {containerModal, overlay} =   styleLevelupModal
  const {container} = stylespageHome
  const {profileContainer} = stylesProfile
  const {completedChallengers} = stylesCompletedChallengers
  const { countdownContainer, coundownBtn, coundownButtonActive} = stylesCountDown
  const { challengeBoxContainer, challengeisNotActive, 
    challengeActive, 
    challengeFailBtn,
    challengeSuccededBtn} = styleChallengeBox

  const styles = {
    experience: { 
      experienceBar,
      currentExperience
   },
    pageHome: {
     container
   },
    profile: {
      profileContainer
   },
    Challenger: {
      completedChallengers
    }, 
    CountDown: {
      countdownContainer,
      coundownBtn,
      coundownButtonActive
    },
    ChallengeBox: {
      challengeBoxContainer,
      challengeisNotActive,
      challengeActive,
      challengeFailBtn,
      challengeSuccededBtn
    },
    LevelUpModal: {
      containerModal,
      overlay
    }
  
  }

  return styles

}

export const style = getStyles()
