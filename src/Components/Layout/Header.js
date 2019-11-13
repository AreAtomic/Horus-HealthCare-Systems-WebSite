import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import logoRect from '../images/horus-rect.png'
import { useSpring } from 'react-spring'

const MenuSection = styled.div(
  {
    width: 170,
    height: 150,
    textAlign: 'center',
    lineHeight: 8.5,
    color: '#fff'
  },
  props => ({ background: props.background })
)

const Menu = styled.header({
  position: 'fixed',
  top: 45,
  left: 0,
  bottom: 0,
  minHeight: '100vh',
  width: 170,
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  transition: '0.5s',
  boxShadow: '5px 5px 15px rgba(81, 176, 173, 0.3)'
})

const Barre = styled.div({
  background: '#1A535C',
  width: '100%',
  position: 'fixed',
  height: 45,
  top: 0,
  left: 0,
  display: 'flex'
})

const Toggle = styled.button({
  width: 38,
  height: 35,
  position: 'relative',
  top: 5,
  left: 5,
  border: 0,
  borderRadius: '50%',
  padding: 0,
  background: '#51AFAD'
})

const Span = styled.span({
  position: 'relative',
  height: 2,
  width: 22,
  background: '#fff',
  marginTop: 4,
  marginBottom: 4,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  transition: '0.5s'
})

const Lien = styled.a({
  textDecoration: 'none',
  outline: 'none'
})

const Header = () => {
  const [greetingStatus, displayGreeting] = React.useState(false)
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500
  })
  return (
    <Fragment>
      <Barre>
        <Toggle
          onClick={() => displayGreeting(a => !a)}
          style={{ background: !greetingStatus ? '#BAD14E' : '#51AFAD' }}
        >
          <Span
            style={{
              transform: !greetingStatus ? 'rotate(45deg)' : '',
              top: !greetingStatus ? 6 : 0
            }}
          />
          <Span
            style={{
              opacity: !greetingStatus ? 0 : 1
            }}
          />
          <Span
            style={{
              transform: !greetingStatus ? 'rotate(-45deg)' : 'rotate(0)',
              top: !greetingStatus ? -6 : 0
            }}
          />
        </Toggle>
        <img
          src={logoRect}
          style={{ height: 45, marginLeft: 'auto', marginRight: 'auto' }}
          alt="Horus HealthCare Systems"
        />
      </Barre>
      <Menu
        style={{
          opacity: !greetingStatus ? 1 : 0,
          left: !greetingStatus ? 0 : -200
        }}
      >
        <Lien>
          <MenuSection background="#BAD14E">Accueil</MenuSection>
        </Lien>
        <Lien>
          <MenuSection background="#51AFAD">E-santé</MenuSection>
        </Lien>
        <Lien>
          <MenuSection background="#818181">Numérique</MenuSection>
        </Lien>
        <Lien>
          <MenuSection background="#1A535C">Environement</MenuSection>
        </Lien>
        <Lien>
          <MenuSection background="#4C9953">Actualité</MenuSection>
        </Lien>
        <Lien>
          <MenuSection background="#303541">Demander un devis</MenuSection>
        </Lien>
      </Menu>
    </Fragment>
  )
}

export default Header
