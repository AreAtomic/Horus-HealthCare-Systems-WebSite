import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import logo from '../images/horus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Foot = styled.footer({
  background: '#1A535C',
  minHeight: 200,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  '@media(max-width: 500px)': {
    flexDirection: 'column'
  }
})

const Devis = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  '@media(max-width: 500px)': {
    marginTop: 20
  }
})

const Button = styled.div(
  {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: 2,
    '@media(max-width: 600px)': {
      fontSize: 14
    }
  },
  props => ({ background: props.background })
)

const Lien = styled.a({
  textDecoration: 'none',
  outline: 'none',
  color: '#fff',
  marginTop: 5
})

const Cap = styled.text({
  textTransform: 'capitalize'
})

const FootTitle = styled.h2({
  marginBottom: 10,
  textDecoration: 'underline',
  '@media(max-width: 600px)': {
    fontSize: 20
  }
})

const Reseau = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media(max-width: 500px)': {
    marginTop: 20
  }
})

const Row = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  marginBottom: 5
})

const Legal = styled.a({
  background: '#BAD14E',
  color: '#303541',
  textAlign: 'center',
  display: 'inline-block',
  width: '100%',
  pointer: 'cursor',
  textDecoration: 'none'
})

const Copyright = styled.div({
  background: '#51AFAD',
  width: '100%',
  textAlign: 'center',
  color: '#303541'
})

const Footer = () => {
  return (
    <Fragment>
      <Foot>
        <img
          src={logo}
          alt="Horus HealthCare Systems"
          style={{
            width: 100,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <Devis>
          <FootTitle>Nous contacter</FootTitle>
          <Button background="#BAD14E">Demander un devis</Button>
          <Lien>05 67 53 00 24</Lien>
          <br />
          <Lien href="https://www.google.com/maps/place/Horus+HealthCare+Systems/@43.6247426,2.2691357,15z/data=!4m5!3m4!1s0x0:0x6904141f1ec03624!8m2!3d43.6247426!4d2.2691357">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <Cap> école</Cap> d'Ingénieurs ISIS
          </Lien>
        </Devis>
        <Reseau>
          <FootTitle>Médias</FootTitle>
          <Row>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 30, marginLeft: 'auto', marginRight: 'auto' }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: 30, marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Row>
          <Row>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 30, marginLeft: 'auto', marginRight: 'auto' }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: 30, marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Row>
        </Reseau>
      </Foot>
      <Copyright>
        <span>Made with </span>
        <FontAwesomeIcon
          icon={faHeartbeat}
          style={{ color: '#ED6D69', fontSize: 17 }}
        />
        <span> by Horus HealthCare Systems</span>
      </Copyright>
      <Legal href="#toz">Mention Legale</Legal>
    </Fragment>
  )
}

export default Footer
