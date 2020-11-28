import { IconSvg, IconSvgProps } from "./IconSvg";

export const ReactIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>React</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2393 7.05918C15.0496 6.99095 14.8585 6.9274 14.666 6.86855C14.6979 6.73183 14.7274 6.59433 14.7543 6.45605C15.1885 4.23339 14.9046 2.44277 13.9357 1.85332C13.0079 1.28769 11.4865 1.87714 9.95162 3.28652C9.80071 3.42558 9.65289 3.56881 9.50816 3.71621C9.41168 3.61829 9.31272 3.52246 9.21129 3.42871C7.6026 1.92168 5.9902 1.28691 5.02238 1.87832C4.09465 2.44511 3.81893 4.12832 4.20969 6.23496C4.24878 6.44329 4.29269 6.65071 4.34143 6.85722C4.1132 6.92558 3.89277 6.99863 3.68199 7.07597C1.79832 7.76933 0.59375 8.85644 0.59375 9.98378C0.59375 11.1486 1.88664 12.3166 3.85084 13.0248C4.01016 13.0818 4.17097 13.1348 4.33326 13.1838C4.28057 13.4049 4.23393 13.6284 4.19336 13.8545C3.82227 15.9248 4.11172 17.5682 5.0376 18.1314C5.99391 18.7131 7.59814 18.1154 9.16193 16.674C9.28563 16.56 9.40933 16.4395 9.53303 16.3127C9.68938 16.4718 9.85019 16.6262 10.0154 16.776C11.5295 18.1502 13.0246 18.7053 13.949 18.1404C14.9046 17.5568 15.2152 15.7912 14.8118 13.6432C14.7809 13.4791 14.7453 13.3117 14.705 13.1408C14.8178 13.1057 14.9282 13.0693 15.0363 13.0318C17.0774 12.3182 18.407 11.1643 18.407 9.98496C18.4062 8.85214 17.1631 7.758 15.2393 7.05918ZM10.4522 3.89199C11.767 2.68457 12.9961 2.208 13.5564 2.54863C14.1528 2.91152 14.3847 4.3748 14.0099 6.29394C13.9852 6.41894 13.9584 6.54355 13.9297 6.66777C13.1451 6.47991 12.3495 6.34732 11.5481 6.27089C11.0892 5.57514 10.5862 4.91283 10.0425 4.28847C10.1756 4.15254 10.312 4.02037 10.4515 3.89199H10.4522ZM5.85326 10.9471C6.01432 11.2752 6.18267 11.5993 6.35832 11.9193C6.53719 12.2459 6.7236 12.5676 6.91756 12.8846C6.36614 12.8215 5.81817 12.7285 5.27584 12.6061C5.43318 12.0701 5.62689 11.5135 5.85326 10.9471ZM5.85326 9.05918C5.63061 8.50488 5.44209 7.95957 5.28734 7.433C5.79574 7.31308 6.33754 7.21503 6.90234 7.14082C6.71309 7.45175 6.531 7.76725 6.35609 8.0873C6.18118 8.40735 6.0132 8.73131 5.85215 9.05918H5.85326ZM6.25775 10.0033C6.49229 9.48847 6.74488 8.98352 7.01553 8.48847C7.28593 7.99368 7.57378 7.51022 7.87906 7.03808C8.40898 6.99589 8.95227 6.97363 9.50111 6.97363C10.05 6.97363 10.5966 6.99589 11.1261 7.03847C11.4282 7.50957 11.7143 7.99134 11.9845 8.48379C12.2546 8.97623 12.5106 9.47884 12.7523 9.9916C12.5138 10.5083 12.2585 11.0153 11.9863 11.5127C11.7164 12.0075 11.4319 12.4924 11.1328 12.9674C10.604 13.0064 10.0566 13.0279 9.5 13.0279C8.94336 13.0279 8.40639 13.0096 7.88723 12.974C7.57971 12.5003 7.28952 12.0148 7.01664 11.5174C6.74376 11.02 6.49043 10.5153 6.25664 10.0033H6.25775ZM12.645 11.9139C12.8244 11.5863 12.9966 11.2544 13.1616 10.9182C13.3878 11.458 13.5874 12.0098 13.7598 12.5713C13.2111 12.7013 12.6563 12.8011 12.0977 12.8701C12.2862 12.5553 12.4686 12.2365 12.645 11.9139ZM13.1542 9.05957C12.9899 8.73014 12.8191 8.40462 12.6417 8.083C12.4685 7.76582 12.288 7.45253 12.1003 7.14316C12.6684 7.21894 13.2135 7.31972 13.7245 7.44277C13.5602 7.99141 13.3699 8.53102 13.1542 9.05957ZM9.50854 4.8623C9.87909 5.28851 10.229 5.73413 10.5569 6.19746C9.85551 6.1623 9.15365 6.1623 8.45129 6.19746C8.79752 5.71543 9.15191 5.26816 9.50854 4.8623ZM5.40535 2.57246C6.00133 2.20839 7.31908 2.72871 8.70809 4.02832C8.79678 4.11152 8.88621 4.19863 8.97527 4.28886C8.42879 4.91313 7.92224 5.57487 7.45898 6.26972C6.65937 6.34556 5.86529 6.47604 5.08176 6.66035C5.03648 6.46868 4.99566 6.27571 4.9593 6.08144C4.62346 4.27558 4.84574 2.91425 5.40535 2.57246ZM4.53662 12.4103C4.38818 12.3658 4.2416 12.3175 4.09687 12.2654C3.22852 11.9529 2.51119 11.5451 2.01875 11.101C1.57789 10.7029 1.35449 10.3057 1.35449 9.98378C1.35449 9.2998 2.32156 8.42714 3.93434 7.83535C4.13695 7.76113 4.3413 7.69329 4.54738 7.63183C4.78691 8.4421 5.07699 9.23484 5.41574 10.0049C5.07295 10.7856 4.77928 11.5891 4.53662 12.4103ZM8.66059 16.0693C7.96924 16.7068 7.27678 17.1588 6.66633 17.3865C6.11785 17.5908 5.68107 17.5967 5.41723 17.4361C4.85539 17.0943 4.6216 15.7744 4.94037 14.0041C4.97822 13.7958 5.02152 13.5874 5.07025 13.3791C5.86163 13.5585 6.66368 13.6811 7.47086 13.7459C7.93864 14.4444 8.44937 15.1099 8.99977 15.7381C8.88918 15.8525 8.776 15.9627 8.66059 16.0693ZM9.52969 15.1623C9.16898 14.7518 8.80902 14.2975 8.45797 13.8092C8.79913 13.8232 9.14647 13.8303 9.5 13.8303C9.86293 13.8303 10.2221 13.8221 10.5762 13.8053C10.2495 14.276 9.90019 14.729 9.52969 15.1623ZM14.1505 16.2791C14.0444 16.8822 13.831 17.2846 13.5672 17.4455C13.0057 17.7885 11.8052 17.3428 10.5109 16.1674C10.3624 16.033 10.214 15.8889 10.063 15.7377C10.6026 15.107 11.1014 14.4388 11.5559 13.7377C12.3675 13.6653 13.1735 13.5341 13.968 13.3451C14.0043 13.4998 14.0365 13.6514 14.0645 13.7998C14.2429 14.749 14.2686 15.6076 14.1505 16.2791ZM14.7963 12.2697C14.699 12.3037 14.5988 12.3365 14.4971 12.3686C14.248 11.5545 13.9466 10.7591 13.595 9.98808C13.9334 9.2273 14.223 8.44352 14.4619 7.64199C14.6441 7.69785 14.8211 7.75644 14.9914 7.81855C16.6398 8.41699 17.6455 9.30293 17.6455 9.98378C17.6455 10.7103 16.5593 11.6533 14.7963 12.2697Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.50006 11.6619C9.81588 11.6629 10.1249 11.5654 10.388 11.3814C10.6511 11.1975 10.8564 10.9356 10.978 10.6288C11.0996 10.3219 11.1319 9.98403 11.0709 9.65785C11.0099 9.33166 10.8584 9.03185 10.6354 8.7964C10.4125 8.56094 10.1282 8.40042 9.81848 8.33517C9.5088 8.26991 9.18769 8.30286 8.89581 8.42982C8.60393 8.55679 8.35441 8.77208 8.17884 9.04842C8.00327 9.32476 7.90955 9.64973 7.90955 9.98217C7.90911 10.2024 7.94991 10.4206 8.02962 10.6242C8.10934 10.8279 8.22639 11.013 8.3741 11.169C8.52182 11.325 8.69729 11.4488 8.89049 11.5334C9.08368 11.6179 9.29082 11.6616 9.50006 11.6619Z"
    />
  </IconSvg>
);