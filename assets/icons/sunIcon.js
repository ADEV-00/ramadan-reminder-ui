import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSun(props) {
  return (
    <Svg
      width="19"
      height="15"
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.35931 0.690284C4.30892 0.567838 4.30916 0.430404 4.35997 0.308131C4.41078 0.185859 4.50801 0.0887329 4.63034 0.0380613C4.75268 -0.0126103 4.89011 -0.0126899 5.0125 0.03784C5.13489 0.08837 5.23224 0.185383 5.28319 0.307597L5.7615 1.46241C5.7868 1.5231 5.79989 1.58819 5.8 1.65395C5.80011 1.71971 5.78726 1.78484 5.76216 1.84562C5.73707 1.9064 5.70023 1.96164 5.65376 2.00816C5.60729 2.05469 5.5521 2.09159 5.49135 2.11675C5.43059 2.14192 5.36547 2.15485 5.29972 2.15481C5.23396 2.15478 5.16886 2.14177 5.10813 2.11653C5.04741 2.0913 4.99226 2.05434 4.94584 2.00776C4.89942 1.96118 4.86265 1.90591 4.83763 1.8451L4.35931 0.690284ZM12.8125 5.26578C12.8781 5.26577 12.9431 5.25279 13.0037 5.2276L14.1585 4.74922C14.2199 4.72459 14.2757 4.68803 14.3229 4.64166C14.37 4.59529 14.4075 4.54003 14.4331 4.47908C14.4588 4.41813 14.4721 4.35269 14.4722 4.28657C14.4724 4.22045 14.4595 4.15495 14.4342 4.09386C14.4089 4.03277 14.3717 3.97731 14.3248 3.93068C14.2779 3.88405 14.2222 3.84719 14.161 3.82222C14.0998 3.79726 14.0342 3.78468 13.9681 3.78523C13.902 3.78578 13.8366 3.79943 13.7758 3.82541L12.621 4.30372C12.5141 4.348 12.4259 4.42797 12.3713 4.53002C12.3168 4.63207 12.2993 4.74987 12.3219 4.86334C12.3445 4.97682 12.4057 5.07896 12.4952 5.15234C12.5847 5.22572 12.6968 5.26582 12.8125 5.26578ZM9.50912 2.11572C9.56978 2.1409 9.63481 2.15388 9.70048 2.1539C9.76616 2.15393 9.83119 2.141 9.89187 2.11586C9.95254 2.09073 10.0077 2.05388 10.0541 2.00741C10.1005 1.96095 10.1373 1.90579 10.1624 1.8451L10.6407 0.690284C10.6911 0.567838 10.6908 0.430404 10.64 0.308131C10.5892 0.185859 10.492 0.0887329 10.3697 0.0380613C10.2473 -0.0126103 10.1099 -0.0126899 9.9875 0.03784C9.86511 0.08837 9.76776 0.185383 9.71681 0.307597L9.2385 1.46241C9.21337 1.52308 9.20043 1.5881 9.20043 1.65376C9.20043 1.71943 9.21337 1.78445 9.2385 1.84512C9.26363 1.90578 9.30046 1.96091 9.3469 2.00734C9.39333 2.05377 9.44846 2.0906 9.50912 2.11572ZM0.8415 4.74922L1.99631 5.2276C2.05701 5.2529 2.1221 5.26598 2.18785 5.2661C2.25361 5.26621 2.31874 5.25335 2.37953 5.22826C2.44031 5.20316 2.49554 5.16633 2.54206 5.11986C2.58859 5.07339 2.62549 5.01819 2.65065 4.95744C2.67582 4.89669 2.68875 4.83157 2.68872 4.76581C2.68868 4.70006 2.67567 4.63495 2.65044 4.57423C2.6252 4.51351 2.58824 4.45836 2.54166 4.41194C2.49509 4.36552 2.43981 4.32875 2.379 4.30372L1.22419 3.82547C1.16338 3.7995 1.09802 3.78584 1.0319 3.78529C0.965782 3.78475 0.900209 3.79732 0.838981 3.82229C0.777752 3.84725 0.722083 3.88412 0.675197 3.93074C0.628312 3.97737 0.59114 4.03283 0.565834 4.09392C0.540528 4.15501 0.52759 4.22051 0.52777 4.28663C0.527949 4.35276 0.541243 4.41819 0.566881 4.47914C0.592518 4.54009 0.629991 4.59535 0.67713 4.64172C0.724268 4.68809 0.780136 4.72465 0.8415 4.74928V4.74922ZM14.5 7.4661H11.7202C11.7912 6.86978 11.735 6.26518 11.5554 5.69215C11.3757 5.11913 11.0767 4.59068 10.6779 4.14163C10.2792 3.69259 9.78978 3.33315 9.24201 3.087C8.69424 2.84085 8.10053 2.71359 7.5 2.71359C6.89947 2.71359 6.30576 2.84085 5.75799 3.087C5.21022 3.33315 4.72084 3.69259 4.32209 4.14163C3.92335 4.59068 3.62429 5.11913 3.44464 5.69215C3.26498 6.26518 3.20881 6.86978 3.27981 7.4661H0.5C0.367392 7.4661 0.240215 7.51877 0.146447 7.61254C0.0526784 7.70631 0 7.83349 0 7.9661C0 8.0987 0.0526784 8.22588 0.146447 8.31965C0.240215 8.41342 0.367392 8.4661 0.5 8.4661H11.1136L11.1155 8.46622L11.1169 8.4661H14.5C14.6326 8.4661 14.7598 8.41342 14.8536 8.31965C14.9473 8.22588 15 8.0987 15 7.9661C15 7.83349 14.9473 7.70631 14.8536 7.61254C14.7598 7.51877 14.6326 7.4661 14.5 7.4661ZM12.5 9.9661H2.5C2.36739 9.9661 2.24021 10.0188 2.14645 10.1125C2.05268 10.2063 2 10.3335 2 10.4661C2 10.5987 2.05268 10.7259 2.14645 10.8197C2.24021 10.9134 2.36739 10.9661 2.5 10.9661H12.5C12.6326 10.9661 12.7598 10.9134 12.8536 10.8197C12.9473 10.7259 13 10.5987 13 10.4661C13 10.3335 12.9473 10.2063 12.8536 10.1125C12.7598 10.0188 12.6326 9.9661 12.5 9.9661Z"
        fill="black"
      />
    </Svg>
  );
}

export default IconSun;
