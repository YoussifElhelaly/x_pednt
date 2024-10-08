import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import './Loader.css'
export default function Loader() {
  const { progress } = useProgress();
  return <Html center>
    
    <svg class="glassesAnimation" width="156px" height="50px" viewBox="0 0 313 99" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path class="glasses-loader-svgpath" d="M310.192984,4.81822628 C309.8006,4.77321321 302.374016,3.90978056 263.198513,2.72989234 C258.861782,2.60030924 254.720559,2.5402918 250.768008,2.5402918 C217.59721,2.5402918 197.960239,6.74560438 190.528187,8.50520646 C182.215663,10.4694134 167.117768,17.0017657 166.322062,17.3427738 L158.54411,17.3427738 L154.823982,17.3427738 L147.04603,17.3427738 C146.251692,17.0004016 131.153797,10.4680494 122.838539,8.50520646 C115.40922,6.74560438 95.7708825,2.5402918 62.5987167,2.5402918 C58.6475334,2.5402918 54.5063106,2.59894521 50.1682121,2.72989234 C10.9940759,3.91114459 3.56612484,4.77321321 3.1737409,4.81822628 L2.62139556,27.8976583 C2.94541993,27.9767722 7.79484795,29.1239236 10.5059886,30.6707366 C11.7255233,33.07007 13.4837315,37.6395793 14.6048285,42.4259697 C15.8134257,47.5847411 20.8966435,68.7026942 28.9425651,79.0120527 C29.5728403,79.8222881 30.2619048,80.5970586 31.0042898,81.3459126 L32.9265609,83.2746547 C32.8691389,83.2160013 32.8144512,83.1546198 32.7570292,83.0959664 C41.4619371,92.0017354 57.8600312,96.62717 75.1180886,96.9095248 C76.4743426,96.9313493 77.8292293,96.9436256 79.1786472,96.9436256 C96.6335803,96.9436256 113.543004,94.7543532 126.061009,81.0676499 C134.039938,72.3501174 136.500883,66.5816234 139.823158,60.0710957 C142.832346,54.1798388 147.240171,40.178044 147.471227,39.4414663 C147.320836,39.2655061 144.453835,35.9004377 146.261262,32.5640139 C147.862243,29.6204315 149.699749,29.3762696 151.900927,29.1307438 C153.213431,28.9861563 155.220468,28.8429329 156.680628,28.7474506 C158.142156,28.8429329 160.149193,28.9861563 161.461697,29.1307438 C163.664242,29.3762696 165.50038,29.6204315 167.101361,32.5640139 C168.906054,35.9004377 166.041788,39.2655061 165.89003,39.4414663 C166.122452,40.178044 170.530277,54.1798388 173.539466,60.0710957 C176.861741,66.5802594 179.321318,72.3501174 187.300248,81.0676499 C199.81962,94.7529892 216.727676,96.9436256 234.181242,96.9436256 C235.532027,96.9436256 236.888281,96.9299853 238.243168,96.9095248 C256.843807,96.6026174 274.451866,91.2583376 282.497787,80.9435229 C290.546443,70.6300723 295.628294,49.5148473 296.836891,44.3560759 C298.046855,39.1986685 299.993736,34.284059 301.207802,32.0756902 C302.42597,29.8673214 310.324235,27.9972326 310.738494,27.8976583 L310.192984,4.81822628 Z M131.242669,61.8725701 C129.128204,67.4655167 119.798993,83.3682748 99.9926812,88.9599273 C93.1105618,90.9062002 86.0588678,91.5402918 79.7898257,91.5402918 C68.026567,91.5402918 59.4630503,89.416732 59.0143299,89.3054425 C35.7395655,84.0657755 30.6418925,62.8159431 30.3718776,61.6978714 C22.5844908,28.1505445 28.9918014,22.9095835 31.1871401,19.7650069 C41.0107264,10.6690278 57.9590542,8.5402918 71.8093848,8.5402918 C82.9673926,8.5402918 92.1113762,9.92105858 93.906258,10.1539902 C99.3574287,10.8644316 127.479417,13.5625559 133.971515,26.0554542 C140.410132,38.460356 133.358438,56.2809176 131.242669,61.8725701 Z M283.869986,61.6978714 C283.599969,62.8159431 278.504866,84.0657755 255.228616,89.3054425 C254.777283,89.416732 246.215005,91.5402918 234.454264,91.5402918 C228.18126,91.5402918 221.13212,90.9062002 214.248643,88.9599273 C194.442177,83.3695688 185.112894,67.4668108 182.999717,61.8725701 C180.883931,56.2809176 173.832183,38.4616501 180.272154,26.0554542 C186.761693,13.5625559 214.885204,10.8644316 220.335113,10.1539902 C222.131313,9.92105858 231.275368,8.5402918 242.433462,8.5402918 C256.282596,8.5402918 273.229751,10.6703219 283.054717,19.7650069 C285.251378,22.9095835 291.658738,28.1505445 283.869986,61.6978714 Z"></path>
    </svg>
  </Html>;
}
