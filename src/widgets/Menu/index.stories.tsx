import React, { useEffect, useState } from 'react'
import noop from 'lodash/noop'
import { setLanguage, useTranslation } from 'react-multi-lang'
import { BrowserRouter } from 'react-router-dom'
import Flex from '../../components/Flex/Flex'
import Heading from '../../components/Heading/Heading'
import Text from '../../components/Text/Text'
import Menu from './Menu'
import { MenuEntry } from './MenuEntry'
import { links } from './config'
import { urlSearchLanguageParam } from '../../constants'

// import useModal from '../Modal/useModal'

export default {
  title: 'Widgets/Menu',
  component: Menu,
  argTypes: {},
}

export const Connected: React.FC = () => {
  // const [openModal] = useModal(<h1>Test</h1>)

  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    setLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])

  function later() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(100)
      }, 3000)
    })
  }

  const balance = '9.013'

  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        links={links}
        balance={balance}
        // onTransactionHistoryHandler={openModal}
        balanceHook={later}
        betaText=""
        setSelectedLanguage={setSelectedLanguage}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p est laborum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  )
}

export const NotConnected: React.FC = () => {
  const t = useTranslation()

  const newLinks = [
    {
      label: t('mainMenu.home'),
      icon: 'HomeIcon',
      href: '/',
    },
    {
      label: t('mainMenu.trade'),
      icon: 'TradeIcon',
      items: [
        {
          label: t('swap'),
          href: 'https://exchange.play2earn.monster',
        },
        {
          label: t('mainMenu.liquidity'),
          href: 'https://exchange.play2earn.monster/#/pool',
        },
      ],
    },
    // {
    //   label: 'Private Round NFTs',
    //   icon: 'PrivateRoundIcon',
    //   href: '/account'
    // },
    {
      label: 'NFT Market',
      icon: 'NFTMarketIcon',
      items: [
        {
          label: 'Buy NFT',
          href: 'https://github.com/pillargame',
        },
        {
          label: 'Sell NFT',
          href: 'https://github.com/pillargame',
        },
        {
          label: 'Transfer NFT',
          href: 'https://github.com/pillargame',
        },
      ]
    },
    {
      label: t('mainMenu.farming'),
      icon: 'NFTFarmingIcon',
      items: [
        {
          label: t('mainMenu.farms'),
          href: `${process.env.REACT_APP_FARMING_URL}/farms?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.staking'),
          href: `${process.env.REACT_APP_FARMING_URL}/staking?${urlSearchLanguageParam}=${t('language')}`,
          hot: true
        },
        // {
        //   label: t('mainMenu.farming.autoFarms'),
        //   href: `/auto-farms`,
        // },
        {
          label: t('mainMenu.NFTFarming'),
          href: `${process.env.REACT_APP_NFTFARMING_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
      ],
    },
    {
      label: t('mainMenu.analytics.analytics'),
      icon: 'InfoIcon',
      items: [
        {
          label: t('mainMenu.analytics.overview'),
          href: 'https://github.com/play2earn',
        },
        {
          label: t('mainMenu.analytics.tokens'),
          href: 'https://docs.play2earn.monster',
        },
        {
          label: t('mainMenu.analytics.pairs'),
          href: 'https://play2earn-monster.medium.com/',
        },
      ],
    },
    {
      label: t('mainMenu.ino.ino'),
      icon: 'BigBangIcon',
      items: [{ label: 'Big Bang Round', href: 'https://play2earn.monster' }],
    },
    {
      label: t('mainMenu.asteroidMining'),
      icon: 'AsteroidMiningIcon',
      blink: true,
      items: [{label: t('mainMenu.captainsIno'), href: 'https://play2earn.monster', external: true}]
    },
    {
      label: t('mainMenu.bridge'),
      icon: 'BridgeIcon',
      href: 'https://play2earn.monster'
    },
    {
      label: t('mainMenu.more'),
      icon: 'MoreIcon',
      items: [
        {
          label: 'Github',
          href: 'https://github.com/pillargame',
          external: true,
        },
        {
          label: 'Docs',
          href: 'https://docs.play2earn.monster',
          external: true,
        },
        {
          label: 'Blog',
          href: 'https://play2earn-monster.medium.com/',
          external: true,
        },
      ],
    },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    setLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])

  return (
    <BrowserRouter>
      <Menu
        account={null}
        login={noop}
        logout={noop}
        isDark
        toggleTheme={noop}
        links={newLinks}
        options={{
          modalTitle: 'Test title',
          modalFooter: 'Test footer',
          modelCopyAddress: 'Test copy address',
          modelLogout: 'Test logout',
          modalBscScan: 'Test bsc',
        }}
        setSelectedLanguage={setSelectedLanguage}
      >
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  )
}

export const WithNoProfile: React.FC = () => {
  function later() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(100)
      }, 3000)
    })
  }

  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    setLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])

  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        links={links}
        balanceHook={later}
        setSelectedLanguage={setSelectedLanguage}
      >
        <div>
          <Heading as="h1" color="heading" mb="8px">
            Page body
          </Heading>
          <Text as="p" color="basic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  )
}

export const WithProfile: React.FC = () => {
  function later() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(100)
      }, 3000)
    })
  }

  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    setLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])

  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        links={links}
        balanceHook={later}
        setSelectedLanguage={setSelectedLanguage}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  )
}

export const MenuEntryComponent: React.FC = () => {
  return (
    <Flex justifyContent="space-between" p="16px" style={{ backgroundColor: '#262626' }}>
      <MenuEntry>Default</MenuEntry>
      <MenuEntry secondary>Secondary</MenuEntry>
      <MenuEntry isactive>isactive</MenuEntry>
      <MenuEntry secondary isactive>
        isactive
      </MenuEntry>
    </Flex>
  )
}
