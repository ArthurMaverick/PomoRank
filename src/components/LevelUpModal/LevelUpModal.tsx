import { useContext } from 'react';
import { challengesContext } from '../../contexts';
import {style} from '../../stylus'
export const LevelUpModal = () => {
  const {level, closeLevelUpModal} = useContext(challengesContext);
  return (
      <div className={style.LevelUpModal.overlay}>
    <div className={style.LevelUpModal.containerModal}>
      <header>{level}</header>
      <strong>Parabens</strong>
      <p>Voce passou de level</p>

      <button type="button" onClick={closeLevelUpModal}>
        <img src="/icons/close.svg" alt="Fechar Modal"/>
      </button>


    </div>
    </div>
  )
}
