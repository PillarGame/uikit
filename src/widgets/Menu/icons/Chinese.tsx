import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="#d80027"/>
      <polygon points="140.1 155.8 162.2 223.8 233.7 223.8 175.9 265.9 198 333.9 140.1 291.9 82.2 333.9 104.4 265.9 46.5 223.8 118 223.8 140.1 155.8" fill="#ffda44"/>
      <polygon points="303.5 396.5 286.6 375.7 261.6 385.4 276.1 362.9 259.2 342 285.1 348.9 299.7 326.4 301.1 353.2 327.1 360.1 302 369.7 303.5 396.5" fill="#ffda44"/>
      <polygon points="337.1 335.5 345.1 309.9 323.2 294.4 350 294 357.9 268.4 366.6 293.8 393.4 293.5 371.9 309.5 380.5 334.9 358.6 319.4 337.1 335.5" fill="#ffda44"/>
      <polygon points="382.4 187.9 370.6 212 389.8 230.7 363.3 226.9 351.5 250.9 346.9 224.5 320.3 220.7 344.1 208.2 339.5 181.7 358.7 200.4 382.4 187.9" fill="#ffda44"/>
      <polygon points="304.2 114.9 302.2 141.6 327.1 151.7 301 158.1 299.1 184.9 285 162.1 258.9 168.5 276.2 148 262 125.3 286.9 135.4 304.2 114.9" fill="#ffda44"/>
    </Svg>
  )
}

export default Icon
