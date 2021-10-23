import { EnglishIcon, JapaneseIcon, ChineseIcon, RussianIcon } from './icons'

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.play2earn.monster',
      },
      {
        label: 'Liquidity',
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
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pillargame',
      },
      {
        label: 'Docs',
        href: 'https://docs.play2earn.monster',
      },
      {
        label: 'Blog',
        href: 'https://play2earn-monster.medium.com/',
      },
    ],
  },
  {
    label: 'INO',
    icon: 'BigBangIcon',
    items: [{ label: 'Big Bang Round', href: 'http://play2earn.monster', external: true }],
  },
  {
    label: 'More',
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

export const socials = [
  {
    label: 'GitHub',
    icon: 'GitHubIcon',
    href: 'https://github.com/pillargame',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/gamefi_rus',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/gammarosigma',
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://play2earn-monster.medium.com/',
  },
  {
    label: 'Discord',
    icon: 'DiscordIcon',
    href: 'http://discord.io/pillargames',
  }
]

export const availableLanguages = [
  {
    name: 'EN',
    icon: EnglishIcon,
  },
  {
    name: 'JP',
    icon: JapaneseIcon,
  },
  {
    name: 'CN',
    icon: ChineseIcon,
  },
  {
    name: 'RU',
    icon: RussianIcon,
  },
]

export const MENU_HEIGHT = 97
export const MENU_ENTRY_HEIGHT = 44
export const SIDEBAR_WIDTH_FULL = 258
export const SIDEBAR_WIDTH_REDUCED = 88
