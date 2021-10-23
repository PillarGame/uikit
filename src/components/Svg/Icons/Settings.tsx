import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12.9268 14.667C14.3075 14.667 15.4268 13.5477 15.4268 12.167C15.4268 10.7863 14.3075 9.66699 12.9268 9.66699C11.546 9.66699 10.4268 10.7863 10.4268 12.167C10.4268 13.5477 11.546 14.667 12.9268 14.667Z"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19.0931 14.6669C18.9822 14.9183 18.9491 15.1971 18.9981 15.4674C19.0471 15.7377 19.176 15.9872 19.3681 16.1836L19.4181 16.2336C19.5731 16.3884 19.696 16.5722 19.7799 16.7745C19.8637 16.9768 19.9069 17.1937 19.9069 17.4127C19.9069 17.6318 19.8637 17.8486 19.7799 18.051C19.696 18.2533 19.5731 18.4371 19.4181 18.5919C19.2633 18.7469 19.0795 18.8698 18.8772 18.9537C18.6748 19.0376 18.458 19.0807 18.2389 19.0807C18.0199 19.0807 17.803 19.0376 17.6007 18.9537C17.3984 18.8698 17.2146 18.7469 17.0598 18.5919L17.0098 18.5419C16.8134 18.3498 16.5639 18.2209 16.2936 18.1719C16.0233 18.1229 15.7444 18.156 15.4931 18.2669C15.2466 18.3725 15.0364 18.5479 14.8884 18.7715C14.7403 18.9951 14.6608 19.2571 14.6598 19.5252V19.6669C14.6598 20.1089 14.4842 20.5329 14.1716 20.8454C13.859 21.158 13.4351 21.3336 12.9931 21.3336C12.5511 21.3336 12.1271 21.158 11.8146 20.8454C11.502 20.5329 11.3264 20.1089 11.3264 19.6669V19.5919C11.32 19.3161 11.2307 19.0486 11.0702 18.8242C10.9097 18.5998 10.6854 18.4288 10.4264 18.3336C10.1751 18.2226 9.89627 18.1896 9.62594 18.2386C9.35561 18.2876 9.10617 18.4165 8.90977 18.6086L8.85977 18.6586C8.70498 18.8135 8.52116 18.9365 8.31883 19.0203C8.1165 19.1042 7.89962 19.1474 7.6806 19.1474C7.46157 19.1474 7.2447 19.1042 7.04237 19.0203C6.84004 18.9365 6.65622 18.8135 6.50143 18.6586C6.34647 18.5038 6.22354 18.32 6.13967 18.1176C6.05579 17.9153 6.01262 17.6984 6.01262 17.4794C6.01262 17.2604 6.05579 17.0435 6.13967 16.8412C6.22354 16.6388 6.34647 16.455 6.50143 16.3002L6.55143 16.2502C6.74355 16.0538 6.87242 15.8044 6.92144 15.5341C6.97045 15.2637 6.93736 14.9849 6.82643 14.7336C6.7208 14.4871 6.5454 14.2769 6.32182 14.1288C6.09824 13.9808 5.83625 13.9013 5.5681 13.9002H5.42643C4.9844 13.9002 4.56048 13.7246 4.24792 13.4121C3.93536 13.0995 3.75977 12.6756 3.75977 12.2336C3.75977 11.7916 3.93536 11.3676 4.24792 11.0551C4.56048 10.7425 4.9844 10.5669 5.42643 10.5669H5.50143C5.77726 10.5605 6.04477 10.4712 6.26918 10.3107C6.49359 10.1502 6.66453 9.92586 6.75977 9.66691C6.8707 9.41556 6.90379 9.13675 6.85477 8.86642C6.80575 8.59609 6.67688 8.34664 6.48477 8.15024L6.43477 8.10024C6.27981 7.94546 6.15687 7.76164 6.073 7.55931C5.98913 7.35698 5.94595 7.1401 5.94595 6.92108C5.94595 6.70205 5.98913 6.48517 6.073 6.28284C6.15687 6.08051 6.27981 5.8967 6.43477 5.74191C6.58955 5.58695 6.77337 5.46402 6.9757 5.38014C7.17803 5.29627 7.39491 5.2531 7.61393 5.2531C7.83296 5.2531 8.04984 5.29627 8.25217 5.38014C8.4545 5.46402 8.63831 5.58695 8.7931 5.74191L8.8431 5.79191C9.0395 5.98402 9.28895 6.1129 9.55928 6.16191C9.8296 6.21093 10.1084 6.17784 10.3598 6.06691H10.4264C10.6729 5.96128 10.8831 5.78587 11.0312 5.5623C11.1792 5.33872 11.2587 5.07673 11.2598 4.80858V4.66691C11.2598 4.22488 11.4354 3.80096 11.7479 3.4884C12.0605 3.17584 12.4844 3.00024 12.9264 3.00024C13.3685 3.00024 13.7924 3.17584 14.1049 3.4884C14.4175 3.80096 14.5931 4.22488 14.5931 4.66691V4.74191C14.5942 5.01007 14.6736 5.27206 14.8217 5.49563C14.9698 5.71921 15.18 5.89461 15.4264 6.00024C15.6778 6.11117 15.9566 6.14426 16.2269 6.09525C16.4973 6.04623 16.7467 5.91736 16.9431 5.72524L16.9931 5.67524C17.1479 5.52028 17.3317 5.39735 17.534 5.31348C17.7364 5.2296 17.9532 5.18643 18.1723 5.18643C18.3913 5.18643 18.6082 5.2296 18.8105 5.31348C19.0128 5.39735 19.1966 5.52028 19.3514 5.67524C19.5064 5.83003 19.6293 6.01385 19.7132 6.21618C19.7971 6.41851 19.8402 6.63539 19.8402 6.85441C19.8402 7.07344 19.7971 7.29031 19.7132 7.49264C19.6293 7.69497 19.5064 7.87879 19.3514 8.03358L19.3014 8.08358C19.1093 8.27998 18.9804 8.52942 18.9314 8.79975C18.8824 9.07008 18.9155 9.3489 19.0264 9.60024V9.66691C19.1321 9.91339 19.3075 10.1236 19.531 10.2717C19.7546 10.4197 20.0166 10.4992 20.2848 10.5002H20.4264C20.8685 10.5002 21.2924 10.6758 21.6049 10.9884C21.9175 11.301 22.0931 11.7249 22.0931 12.1669C22.0931 12.6089 21.9175 13.0329 21.6049 13.3454C21.2924 13.658 20.8685 13.8336 20.4264 13.8336H20.3514C20.0833 13.8346 19.8213 13.9141 19.5977 14.0622C19.3741 14.2102 19.1987 14.4204 19.0931 14.6669V14.6669Z"
        stroke="#929292"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
