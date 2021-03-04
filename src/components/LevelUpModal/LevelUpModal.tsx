import { useContext } from 'react';
import { challengesContext } from '../../contexts';
import {Overlay, ContainerModal} from './styles'

export const LevelUpModal = () => {
  const {level, closeLevelUpModal} = useContext(challengesContext);

  return (
    <Overlay>
      <ContainerModal>
      
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Voce passou de level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal"/>
        </button>

      </ContainerModal>
    </Overlay>
  )
}
