/* eslint-disable no-unused-vars */
import './TabsMenu.css'

export default function TabsMenu({ buttons, children, ButtonsContainer }) {
  
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}