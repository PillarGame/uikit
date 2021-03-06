import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../components/Svg'
import Flex from '../../components/Flex/Flex'
import { LogoIcon as LogoWithText } from './icons'

interface Props {
  isDark: boolean
  href: string
  isPushed?: boolean
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 126px;
    height: auto;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`

const Logo: React.FC<Props> = ({ isDark, href, isPushed }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      {!isPushed ? (
        <LogoWithText className="desktop-icon" isDark={isDark} />
      ) : (
        <LogoWithText className="desktop-icon" isDark={isDark} withText />
      )}
    </>
  )

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" to={href} aria-label="monster home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="monster home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  )
}

export default Logo
