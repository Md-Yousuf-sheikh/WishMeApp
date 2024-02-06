/* eslint-disable react/react-in-jsx-scope */
import {createIcon} from 'native-base';
import {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Rect,
  ClipPath,
} from 'react-native-svg';

//  bottom tab icons
export const WishBoxIcon = createIcon({
  viewBox: '0 0 28 27',
  path: [
    <Path
      d="M25.8462 7.54034H21.1238C21.1763 7.49592 21.2302 7.45284 21.2813 7.40573C21.6902 7.0425 22.0197 6.59883 22.2492 6.10245C22.4788 5.60607 22.6034 5.06767 22.6154 4.52092C22.6331 3.92279 22.5283 3.32735 22.3076 2.77117C22.0868 2.21499 21.7547 1.70979 21.3316 1.2866C20.9086 0.863411 20.4035 0.531155 19.8473 0.31023C19.2912 0.0893051 18.6958 -0.0156256 18.0977 0.00187942C17.5507 0.0136608 17.0121 0.138224 16.5154 0.367773C16.0188 0.597322 15.5749 0.926914 15.2115 1.33592C14.7087 1.91866 14.3 2.57632 14 3.28515C13.7 2.57632 13.2913 1.91866 12.7885 1.33592C12.4251 0.926914 11.9812 0.597322 11.4846 0.367773C10.9879 0.138224 10.4493 0.0136608 9.90231 0.00187942C9.30417 -0.0156256 8.70877 0.0893051 8.15265 0.31023C7.59653 0.531155 7.09144 0.863411 6.66837 1.2866C6.24531 1.70979 5.9132 2.21499 5.69244 2.77117C5.47168 3.32735 5.36693 3.92279 5.38462 4.52092C5.39658 5.06767 5.52123 5.60607 5.75078 6.10245C5.98032 6.59883 6.30981 7.0425 6.71865 7.40573C6.76981 7.45015 6.82365 7.49323 6.87615 7.54034H2.15385C1.58261 7.54034 1.03477 7.76726 0.630847 8.17119C0.226922 8.57511 0 9.12295 0 9.69419V14.0019C0 14.5731 0.226922 15.121 0.630847 15.5249C1.03477 15.9288 1.58261 16.1557 2.15385 16.1557V24.7711C2.15385 25.3423 2.38077 25.8902 2.78469 26.2941C3.18862 26.698 3.73646 26.925 4.30769 26.925H23.6923C24.2635 26.925 24.8114 26.698 25.2153 26.2941C25.6192 25.8902 25.8462 25.3423 25.8462 24.7711V16.1557C26.4174 16.1557 26.9652 15.9288 27.3692 15.5249C27.7731 15.121 28 14.5731 28 14.0019V9.69419C28 9.12295 27.7731 8.57511 27.3692 8.17119C26.9652 7.76726 26.4174 7.54034 25.8462 7.54034ZM16.8269 2.76284C16.9974 2.57454 17.205 2.42353 17.4367 2.31928C17.6684 2.21504 17.9191 2.15981 18.1731 2.15707H18.239C18.5368 2.15893 18.8311 2.2202 19.1049 2.33728C19.3786 2.45437 19.6262 2.62491 19.8332 2.83892C20.0402 3.05293 20.2024 3.3061 20.3103 3.5836C20.4182 3.86109 20.4696 4.15733 20.4615 4.45496C20.4588 4.70897 20.4036 4.95968 20.2993 5.19134C20.1951 5.42299 20.0441 5.6306 19.8558 5.80111C18.5783 6.93188 16.4581 7.33034 15.1442 7.47034C15.3058 6.04476 15.75 3.97303 16.8269 2.76284ZM8.19942 2.8113C8.61665 2.39412 9.18171 2.15851 9.77173 2.15573H9.83769C10.0917 2.15847 10.3424 2.21369 10.5741 2.31794C10.8057 2.42218 11.0133 2.5732 11.1838 2.76149C12.3133 4.03765 12.7117 6.1538 12.8517 7.46226C11.5433 7.32765 9.42712 6.9238 8.15096 5.79438C7.96266 5.62386 7.81165 5.41626 7.7074 5.18461C7.60316 4.95295 7.54793 4.70224 7.54519 4.44823C7.53684 4.14566 7.59005 3.84455 7.70159 3.56316C7.81312 3.28178 7.98066 3.02598 8.19404 2.8113H8.19942ZM2.15385 9.69419H12.9231V14.0019H2.15385V9.69419ZM4.30769 16.1557H12.9231V24.7711H4.30769V16.1557ZM23.6923 24.7711H15.0769V16.1557H23.6923V24.7711ZM25.8462 14.0019H15.0769V9.69419H25.8462V14.0019Z"
      fill="white"
    />,
  ],
});
export const WishBoxActiveIcon = createIcon({
  viewBox: '0 0 28 27',
  path: [
    <Path
      d="M25.8462 7.54034H21.1238C21.1763 7.49592 21.2302 7.45284 21.2813 7.40573C21.6902 7.0425 22.0197 6.59883 22.2492 6.10245C22.4788 5.60607 22.6034 5.06767 22.6154 4.52092C22.6331 3.92279 22.5283 3.32735 22.3076 2.77117C22.0868 2.21499 21.7547 1.70979 21.3316 1.2866C20.9086 0.863411 20.4035 0.531155 19.8473 0.31023C19.2912 0.0893051 18.6958 -0.0156256 18.0977 0.00187942C17.5507 0.0136608 17.0121 0.138224 16.5154 0.367773C16.0188 0.597322 15.5749 0.926914 15.2115 1.33592C14.7087 1.91866 14.3 2.57632 14 3.28515C13.7 2.57632 13.2913 1.91866 12.7885 1.33592C12.4251 0.926914 11.9812 0.597322 11.4846 0.367773C10.9879 0.138224 10.4493 0.0136608 9.90231 0.00187942C9.30417 -0.0156256 8.70877 0.0893051 8.15265 0.31023C7.59653 0.531155 7.09144 0.863411 6.66837 1.2866C6.24531 1.70979 5.9132 2.21499 5.69244 2.77117C5.47168 3.32735 5.36693 3.92279 5.38462 4.52092C5.39658 5.06767 5.52123 5.60607 5.75078 6.10245C5.98032 6.59883 6.30981 7.0425 6.71865 7.40573C6.76981 7.45015 6.82365 7.49323 6.87615 7.54034H2.15385C1.58261 7.54034 1.03477 7.76726 0.630847 8.17119C0.226922 8.57511 0 9.12295 0 9.69419V14.0019C0 14.5731 0.226922 15.121 0.630847 15.5249C1.03477 15.9288 1.58261 16.1557 2.15385 16.1557V24.7711C2.15385 25.3423 2.38077 25.8902 2.78469 26.2941C3.18862 26.698 3.73646 26.925 4.30769 26.925H23.6923C24.2635 26.925 24.8114 26.698 25.2153 26.2941C25.6192 25.8902 25.8462 25.3423 25.8462 24.7711V16.1557C26.4174 16.1557 26.9652 15.9288 27.3692 15.5249C27.7731 15.121 28 14.5731 28 14.0019V9.69419C28 9.12295 27.7731 8.57511 27.3692 8.17119C26.9652 7.76726 26.4174 7.54034 25.8462 7.54034ZM16.8269 2.76284C16.9974 2.57454 17.205 2.42353 17.4367 2.31928C17.6684 2.21504 17.9191 2.15981 18.1731 2.15707H18.239C18.5368 2.15893 18.8311 2.2202 19.1049 2.33728C19.3786 2.45437 19.6262 2.62491 19.8332 2.83892C20.0402 3.05293 20.2024 3.3061 20.3103 3.5836C20.4182 3.86109 20.4696 4.15733 20.4615 4.45496C20.4588 4.70897 20.4036 4.95968 20.2993 5.19134C20.1951 5.42299 20.0441 5.6306 19.8558 5.80111C18.5783 6.93188 16.4581 7.33034 15.1442 7.47034C15.3058 6.04476 15.75 3.97303 16.8269 2.76284ZM8.19942 2.8113C8.61665 2.39412 9.18171 2.15851 9.77173 2.15573H9.83769C10.0917 2.15847 10.3424 2.21369 10.5741 2.31794C10.8057 2.42218 11.0133 2.5732 11.1838 2.76149C12.3133 4.03765 12.7117 6.1538 12.8517 7.46226C11.5433 7.32765 9.42712 6.9238 8.15096 5.79438C7.96266 5.62386 7.81165 5.41626 7.7074 5.18461C7.60316 4.95295 7.54793 4.70224 7.54519 4.44823C7.53684 4.14566 7.59005 3.84455 7.70159 3.56316C7.81312 3.28178 7.98066 3.02598 8.19404 2.8113H8.19942ZM2.15385 9.69419H12.9231V14.0019H2.15385V9.69419ZM4.30769 16.1557H12.9231V24.7711H4.30769V16.1557ZM23.6923 24.7711H15.0769V16.1557H23.6923V24.7711ZM25.8462 14.0019H15.0769V9.69419H25.8462V14.0019Z"
      fill="#FFE03B"
    />,
  ],
});
export const TabMessageIcon = createIcon({
  viewBox: '0 0 30 30',
  path: [
    <>
      <Path
        d="M20 2.5H10C5.86375 2.5 2.5 5.86375 2.5 10V26.25C2.5 26.5815 2.6317 26.8995 2.86612 27.1339C3.10054 27.3683 3.41848 27.5 3.75 27.5H20C24.1362 27.5 27.5 24.1362 27.5 20V10C27.5 5.86375 24.1362 2.5 20 2.5ZM25 20C25 22.7575 22.7575 25 20 25H5V10C5 7.2425 7.2425 5 10 5H20C22.7575 5 25 7.2425 25 10V20Z"
        fill="#ffffff"
      />
      <Path
        d="M8.75 11.25H21.25V13.75H8.75V11.25ZM8.75 16.25H17.5V18.75H8.75V16.25Z"
        fill="#ffffff"
      />
    </>,
  ],
});
export const TabMessageActiveIcon = createIcon({
  viewBox: '0 0 30 30',
  path: [
    <>
      <Path
        d="M20 2.5H10C5.86375 2.5 2.5 5.86375 2.5 10V26.25C2.5 26.5815 2.6317 26.8995 2.86612 27.1339C3.10054 27.3683 3.41848 27.5 3.75 27.5H20C24.1362 27.5 27.5 24.1362 27.5 20V10C27.5 5.86375 24.1362 2.5 20 2.5ZM25 20C25 22.7575 22.7575 25 20 25H5V10C5 7.2425 7.2425 5 10 5H20C22.7575 5 25 7.2425 25 10V20Z"
        fill="#FFE03B"
      />
      <Path
        d="M8.75 11.25H21.25V13.75H8.75V11.25ZM8.75 16.25H17.5V18.75H8.75V16.25Z"
        fill="#FFE03B"
      />
    </>,
  ],
});
export const TabBirthCakeIcon = createIcon({
  viewBox: '0 0 26 28',
  path: [
    <>
      <Path
        d="M26 14.0006C26 13.205 25.6839 12.4419 25.1213 11.8793C24.5587 11.3167 23.7956 11.0006 23 11.0006H14V9.87565C14.8583 9.6527 15.6185 9.15136 16.1613 8.45014C16.7042 7.74893 16.9992 6.88745 17 6.00065C17 2.50065 13.695 0.2619 13.555 0.16815C13.3907 0.0585106 13.1975 0 13 0C12.8025 0 12.6093 0.0585106 12.445 0.16815C12.305 0.2619 9 2.50065 9 6.00065C9.00084 6.88745 9.2958 7.74893 9.83867 8.45014C10.3815 9.15136 11.1417 9.6527 12 9.87565V11.0006H3C2.20435 11.0006 1.44129 11.3167 0.87868 11.8793C0.316071 12.4419 0 13.205 0 14.0006V16.9169C0.00102599 18.0078 0.351484 19.0697 1 19.9469V25.0006C1 25.7963 1.31607 26.5594 1.87868 27.122C2.44129 27.6846 3.20435 28.0006 4 28.0006H22C22.7956 28.0006 23.5587 27.6846 24.1213 27.122C24.6839 26.5594 25 25.7963 25 25.0006V19.9469C25.6485 19.0697 25.999 18.0078 26 16.9169V14.0006ZM11 6.00065C11 4.3044 12.25 2.94315 13 2.2769C13.75 2.94315 15 4.3044 15 6.00065C15 6.53108 14.7893 7.03979 14.4142 7.41486C14.0391 7.78994 13.5304 8.00065 13 8.00065C12.4696 8.00065 11.9609 7.78994 11.5858 7.41486C11.2107 7.03979 11 6.53108 11 6.00065ZM2 14.0006C2 13.7354 2.10536 13.4811 2.29289 13.2935C2.48043 13.106 2.73478 13.0006 3 13.0006H23C23.2652 13.0006 23.5196 13.106 23.7071 13.2935C23.8946 13.4811 24 13.7354 24 14.0006V16.9169C24 18.5731 22.6925 19.9557 21.085 19.9994C20.684 20.0108 20.2849 19.9416 19.9111 19.796C19.5374 19.6504 19.1966 19.4314 18.909 19.1518C18.6213 18.8722 18.3927 18.5378 18.2366 18.1683C18.0805 17.7988 18 17.4018 18 17.0006C18 16.7354 17.8946 16.4811 17.7071 16.2935C17.5196 16.106 17.2652 16.0006 17 16.0006C16.7348 16.0006 16.4804 16.106 16.2929 16.2935C16.1054 16.4811 16 16.7354 16 17.0006C16 17.7963 15.6839 18.5594 15.1213 19.122C14.5587 19.6846 13.7956 20.0006 13 20.0006C12.2044 20.0006 11.4413 19.6846 10.8787 19.122C10.3161 18.5594 10 17.7963 10 17.0006C10 16.7354 9.89464 16.4811 9.70711 16.2935C9.51957 16.106 9.26522 16.0006 9 16.0006C8.73478 16.0006 8.48043 16.106 8.29289 16.2935C8.10536 16.4811 8 16.7354 8 17.0006C8.00016 17.4019 7.91984 17.799 7.76379 18.1687C7.60774 18.5383 7.37913 18.8729 7.09148 19.1526C6.80384 19.4323 6.46302 19.6515 6.08917 19.7972C5.71533 19.9428 5.31606 20.012 4.915 20.0006C3.3075 19.9556 2 18.5731 2 16.9169V14.0006ZM22 26.0006H4C3.73478 26.0006 3.48043 25.8953 3.29289 25.7078C3.10536 25.5202 3 25.2659 3 25.0006V21.5706C3.58536 21.8359 4.21762 21.9821 4.86 22.0006C5.52832 22.0214 6.19394 21.9069 6.81688 21.664C7.43982 21.421 8.00722 21.0547 8.485 20.5869C8.67154 20.4051 8.84373 20.2091 9 20.0006C9.46574 20.6216 10.0697 21.1256 10.7639 21.4728C11.4582 21.8199 12.2238 22.0006 13 22.0006C13.7762 22.0006 14.5418 21.8199 15.2361 21.4728C15.9303 21.1256 16.5343 20.6216 17 20.0006C17.1568 20.2083 17.3294 20.4034 17.5163 20.5844C18.4465 21.4956 19.6978 22.0043 21 22.0006H21.1425C21.784 21.9817 22.4154 21.8356 23 21.5706V25.0006C23 25.2659 22.8946 25.5202 22.7071 25.7078C22.5196 25.8953 22.2652 26.0006 22 26.0006Z"
        fill="white"
      />
    </>,
  ],
});
export const TabBirthCakeActiveIcon = createIcon({
  viewBox: '0 0 26 28',
  path: [
    <>
      <Path
        d="M26 14.0006C26 13.205 25.6839 12.4419 25.1213 11.8793C24.5587 11.3167 23.7956 11.0006 23 11.0006H14V9.87565C14.8583 9.6527 15.6185 9.15136 16.1613 8.45014C16.7042 7.74893 16.9992 6.88745 17 6.00065C17 2.50065 13.695 0.2619 13.555 0.16815C13.3907 0.0585106 13.1975 0 13 0C12.8025 0 12.6093 0.0585106 12.445 0.16815C12.305 0.2619 9 2.50065 9 6.00065C9.00084 6.88745 9.2958 7.74893 9.83867 8.45014C10.3815 9.15136 11.1417 9.6527 12 9.87565V11.0006H3C2.20435 11.0006 1.44129 11.3167 0.87868 11.8793C0.316071 12.4419 0 13.205 0 14.0006V16.9169C0.00102599 18.0078 0.351484 19.0697 1 19.9469V25.0006C1 25.7963 1.31607 26.5594 1.87868 27.122C2.44129 27.6846 3.20435 28.0006 4 28.0006H22C22.7956 28.0006 23.5587 27.6846 24.1213 27.122C24.6839 26.5594 25 25.7963 25 25.0006V19.9469C25.6485 19.0697 25.999 18.0078 26 16.9169V14.0006ZM11 6.00065C11 4.3044 12.25 2.94315 13 2.2769C13.75 2.94315 15 4.3044 15 6.00065C15 6.53108 14.7893 7.03979 14.4142 7.41486C14.0391 7.78994 13.5304 8.00065 13 8.00065C12.4696 8.00065 11.9609 7.78994 11.5858 7.41486C11.2107 7.03979 11 6.53108 11 6.00065ZM2 14.0006C2 13.7354 2.10536 13.4811 2.29289 13.2935C2.48043 13.106 2.73478 13.0006 3 13.0006H23C23.2652 13.0006 23.5196 13.106 23.7071 13.2935C23.8946 13.4811 24 13.7354 24 14.0006V16.9169C24 18.5731 22.6925 19.9557 21.085 19.9994C20.684 20.0108 20.2849 19.9416 19.9111 19.796C19.5374 19.6504 19.1966 19.4314 18.909 19.1518C18.6213 18.8722 18.3927 18.5378 18.2366 18.1683C18.0805 17.7988 18 17.4018 18 17.0006C18 16.7354 17.8946 16.4811 17.7071 16.2935C17.5196 16.106 17.2652 16.0006 17 16.0006C16.7348 16.0006 16.4804 16.106 16.2929 16.2935C16.1054 16.4811 16 16.7354 16 17.0006C16 17.7963 15.6839 18.5594 15.1213 19.122C14.5587 19.6846 13.7956 20.0006 13 20.0006C12.2044 20.0006 11.4413 19.6846 10.8787 19.122C10.3161 18.5594 10 17.7963 10 17.0006C10 16.7354 9.89464 16.4811 9.70711 16.2935C9.51957 16.106 9.26522 16.0006 9 16.0006C8.73478 16.0006 8.48043 16.106 8.29289 16.2935C8.10536 16.4811 8 16.7354 8 17.0006C8.00016 17.4019 7.91984 17.799 7.76379 18.1687C7.60774 18.5383 7.37913 18.8729 7.09148 19.1526C6.80384 19.4323 6.46302 19.6515 6.08917 19.7972C5.71533 19.9428 5.31606 20.012 4.915 20.0006C3.3075 19.9556 2 18.5731 2 16.9169V14.0006ZM22 26.0006H4C3.73478 26.0006 3.48043 25.8953 3.29289 25.7078C3.10536 25.5202 3 25.2659 3 25.0006V21.5706C3.58536 21.8359 4.21762 21.9821 4.86 22.0006C5.52832 22.0214 6.19394 21.9069 6.81688 21.664C7.43982 21.421 8.00722 21.0547 8.485 20.5869C8.67154 20.4051 8.84373 20.2091 9 20.0006C9.46574 20.6216 10.0697 21.1256 10.7639 21.4728C11.4582 21.8199 12.2238 22.0006 13 22.0006C13.7762 22.0006 14.5418 21.8199 15.2361 21.4728C15.9303 21.1256 16.5343 20.6216 17 20.0006C17.1568 20.2083 17.3294 20.4034 17.5163 20.5844C18.4465 21.4956 19.6978 22.0043 21 22.0006H21.1425C21.784 21.9817 22.4154 21.8356 23 21.5706V25.0006C23 25.2659 22.8946 25.5202 22.7071 25.7078C22.5196 25.8953 22.2652 26.0006 22 26.0006Z"
        fill="#FFE03B"
      />
    </>,
  ],
});

// header icon
export const BellIcon = createIcon({
  viewBox: '0 0 22 26',
  path: [
    <>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.0843 15.085V14.8295C1.12178 14.0737 1.36403 13.3413 1.78608 12.7079C2.48859 11.9471 2.96949 11.0147 3.17834 10.0087C3.17834 9.23112 3.17834 8.44246 3.24625 7.6649C3.59714 3.92153 7.29849 1.33337 10.9546 1.33337H11.0451C14.7012 1.33337 18.4025 3.92153 18.7648 7.6649C18.8327 8.44246 18.7648 9.23112 18.8214 10.0087C19.033 11.0171 19.5134 11.9523 20.2136 12.719C20.6388 13.3468 20.8815 14.0765 20.9154 14.8295V15.0739C20.9407 16.0894 20.5909 17.0797 19.9306 17.862C19.0581 18.7768 17.8741 19.3459 16.6028 19.4615C12.8748 19.8614 9.11354 19.8614 5.38556 19.4615C4.11567 19.3409 2.93339 18.7726 2.05774 17.862C1.40767 17.0791 1.06262 16.0947 1.0843 15.085Z"
        stroke="url(#paint0_linear_468_2473)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.14743 23.3271C8.72992 24.0583 9.5853 24.5314 10.5243 24.6419C11.4632 24.7524 12.4084 24.4911 13.1505 23.9159C13.3787 23.7457 13.5841 23.5479 13.7617 23.3271"
        stroke="url(#paint1_linear_468_2473)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_468_2473"
          x1="1.08334"
          y1="10.5474"
          x2="20.9167"
          y2="10.5474"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#8C51A5" />
          <Stop offset="1" stopColor="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_468_2473"
          x1="8.14743"
          y1="23.9969"
          x2="13.7617"
          y2="23.9969"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#8C51A5" />
          <Stop offset="1" stopColor="#CB5E98" />
        </LinearGradient>
      </Defs>
    </>,
  ],
});

//  icons
export const CalenderIcon = createIcon({
  viewBox: '0 0 25 25',
  path: [
    <>
      <>
        <Path
          d="M22.3958 4.16675H20.1389V5.55564H22.2222V20.8334H2.77777V5.55564H4.8611V4.16675H2.60416C2.44182 4.16946 2.28161 4.20413 2.13268 4.26877C1.98374 4.33341 1.849 4.42675 1.73615 4.54348C1.62329 4.6602 1.53454 4.79801 1.47495 4.94904C1.41537 5.10007 1.38612 5.26136 1.38888 5.42369V20.9654C1.38612 21.1277 1.41537 21.289 1.47495 21.44C1.53454 21.591 1.62329 21.7289 1.73615 21.8456C1.849 21.9623 1.98374 22.0556 2.13268 22.1203C2.28161 22.1849 2.44182 22.2196 2.60416 22.2223H22.3958C22.5582 22.2196 22.7184 22.1849 22.8673 22.1203C23.0162 22.0556 23.151 21.9623 23.2638 21.8456C23.3767 21.7289 23.4654 21.591 23.525 21.44C23.5846 21.289 23.6139 21.1277 23.6111 20.9654V5.42369C23.6139 5.26136 23.5846 5.10007 23.525 4.94904C23.4654 4.79801 23.3767 4.6602 23.2638 4.54348C23.151 4.42675 23.0162 4.33341 22.8673 4.26877C22.7184 4.20413 22.5582 4.16946 22.3958 4.16675Z"
          fill="url(#paint0_linear_345_8929)"
        />
        <Path
          d="M5.55554 9.72217H6.94443V11.1111H5.55554V9.72217Z"
          fill="url(#paint1_linear_345_8929)"
        />
        <Path
          d="M9.72223 9.72217H11.1111V11.1111H9.72223V9.72217Z"
          fill="url(#paint2_linear_345_8929)"
        />
        <Path
          d="M13.8889 9.72217H15.2778V11.1111H13.8889V9.72217Z"
          fill="url(#paint3_linear_345_8929)"
        />
        <Path
          d="M18.0555 9.72217H19.4444V11.1111H18.0555V9.72217Z"
          fill="url(#paint4_linear_345_8929)"
        />
        <Path
          d="M5.55554 13.1943H6.94443V14.5832H5.55554V13.1943Z"
          fill="url(#paint5_linear_345_8929)"
        />
        <Path
          d="M9.72223 13.1943H11.1111V14.5832H9.72223V13.1943Z"
          fill="url(#paint6_linear_345_8929)"
        />
        <Path
          d="M13.8889 13.1943H15.2778V14.5832H13.8889V13.1943Z"
          fill="url(#paint7_linear_345_8929)"
        />
        <Path
          d="M18.0555 13.1943H19.4444V14.5832H18.0555V13.1943Z"
          fill="url(#paint8_linear_345_8929)"
        />
        <Path
          d="M5.55554 16.6667H6.94443V18.0556H5.55554V16.6667Z"
          fill="url(#paint9_linear_345_8929)"
        />
        <Path
          d="M9.72223 16.6667H11.1111V18.0556H9.72223V16.6667Z"
          fill="url(#paint10_linear_345_8929)"
        />
        <Path
          d="M13.8889 16.6667H15.2778V18.0556H13.8889V16.6667Z"
          fill="url(#paint11_linear_345_8929)"
        />
        <Path
          d="M18.0555 16.6667H19.4444V18.0556H18.0555V16.6667Z"
          fill="url(#paint12_linear_345_8929)"
        />
        <Path
          d="M6.94444 6.94447C7.12862 6.94447 7.30526 6.87131 7.43549 6.74107C7.56572 6.61084 7.63889 6.43421 7.63889 6.25003V2.08336C7.63889 1.89918 7.56572 1.72255 7.43549 1.59231C7.30526 1.46208 7.12862 1.38892 6.94444 1.38892C6.76027 1.38892 6.58363 1.46208 6.4534 1.59231C6.32316 1.72255 6.25 1.89918 6.25 2.08336V6.25003C6.25 6.43421 6.32316 6.61084 6.4534 6.74107C6.58363 6.87131 6.76027 6.94447 6.94444 6.94447Z"
          fill="url(#paint13_linear_345_8929)"
        />
        <Path
          d="M18.0556 6.94447C18.2397 6.94447 18.4164 6.87131 18.5466 6.74107C18.6768 6.61084 18.75 6.43421 18.75 6.25003V2.08336C18.75 1.89918 18.6768 1.72255 18.5466 1.59231C18.4164 1.46208 18.2397 1.38892 18.0556 1.38892C17.8714 1.38892 17.6947 1.46208 17.5645 1.59231C17.4343 1.72255 17.3611 1.89918 17.3611 2.08336V6.25003C17.3611 6.43421 17.4343 6.61084 17.5645 6.74107C17.6947 6.87131 17.8714 6.94447 18.0556 6.94447Z"
          fill="url(#paint14_linear_345_8929)"
        />
        <Path
          d="M9.02777 4.16675H15.9722V5.55564H9.02777V4.16675Z"
          fill="url(#paint15_linear_345_8929)"
        />
      </>
      <Defs>
        <LinearGradient
          id="paint0_linear_345_8929"
          x1="1.3887"
          y1="13.1945"
          x2="23.6113"
          y2="13.1945"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_345_8929"
          x1="5.55554"
          y1="10.4166"
          x2="6.94443"
          y2="10.4166"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_345_8929"
          x1="9.72223"
          y1="10.4166"
          x2="11.1111"
          y2="10.4166"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_345_8929"
          x1="13.8889"
          y1="10.4166"
          x2="15.2778"
          y2="10.4166"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_345_8929"
          x1="18.0555"
          y1="10.4166"
          x2="19.4444"
          y2="10.4166"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_345_8929"
          x1="5.55554"
          y1="13.8888"
          x2="6.94443"
          y2="13.8888"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_345_8929"
          x1="9.72223"
          y1="13.8888"
          x2="11.1111"
          y2="13.8888"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_345_8929"
          x1="13.8889"
          y1="13.8888"
          x2="15.2778"
          y2="13.8888"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_345_8929"
          x1="18.0555"
          y1="13.8888"
          x2="19.4444"
          y2="13.8888"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear_345_8929"
          x1="5.55554"
          y1="17.3612"
          x2="6.94443"
          y2="17.3612"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear_345_8929"
          x1="9.72223"
          y1="17.3612"
          x2="11.1111"
          y2="17.3612"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear_345_8929"
          x1="13.8889"
          y1="17.3612"
          x2="15.2778"
          y2="17.3612"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear_345_8929"
          x1="18.0555"
          y1="17.3612"
          x2="19.4444"
          y2="17.3612"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint13_linear_345_8929"
          x1="6.25"
          y1="4.16669"
          x2="7.63889"
          y2="4.16669"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint14_linear_345_8929"
          x1="17.3611"
          y1="4.16669"
          x2="18.75"
          y2="4.16669"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint15_linear_345_8929"
          x1="9.02777"
          y1="4.86119"
          x2="15.9722"
          y2="4.86119"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <ClipPath id="clip0_345_8929">
          <Rect width="25" height="25" fill="white" />
        </ClipPath>
      </Defs>
    </>,
  ],
});
export const EditPanIcon = createIcon({
  viewBox: '0 0 13 13',
  path: [
    <>
      <Path
        d="M11.5484 6.69609C11.5484 6.55687 11.6037 6.42336 11.7021 6.32491C11.8006 6.22647 11.9341 6.17117 12.0733 6.17117C12.2125 6.17117 12.3461 6.22647 12.4445 6.32491C12.5429 6.42336 12.5982 6.55687 12.5982 6.69609V12.4703C12.5982 12.6095 12.5429 12.743 12.4445 12.8415C12.3461 12.9399 12.2125 12.9952 12.0733 12.9952H0.524927C0.385707 12.9952 0.25219 12.9399 0.153748 12.8415C0.0553047 12.743 0 12.6095 0 12.4703V0.921899C0 0.78268 0.0553047 0.649163 0.153748 0.55072C0.25219 0.452277 0.385707 0.396973 0.524927 0.396973H6.29912C6.43834 0.396973 6.57186 0.452277 6.6703 0.55072C6.76874 0.649163 6.82405 0.78268 6.82405 0.921899C6.82405 1.06112 6.76874 1.19464 6.6703 1.29308C6.57186 1.39152 6.43834 1.44683 6.29912 1.44683H1.04985V11.9454H11.5484V6.69609Z"
        fill="url(#paint0_linear_338_7453)"
      />
      <Path
        d="M5.60938 7.38906L6.47551 7.26517L11.7962 1.94557C11.8463 1.89714 11.8863 1.83922 11.9138 1.77518C11.9413 1.71114 11.9558 1.64225 11.9564 1.57255C11.957 1.50286 11.9437 1.43373 11.9173 1.36922C11.8909 1.30471 11.852 1.2461 11.8027 1.19681C11.7534 1.14753 11.6948 1.10855 11.6303 1.08216C11.5657 1.05576 11.4966 1.04248 11.4269 1.04309C11.3572 1.04369 11.2883 1.05817 11.2243 1.08568C11.1603 1.11319 11.1023 1.15318 11.0539 1.20332L5.73221 6.52293L5.60833 7.38906H5.60938ZM12.5384 0.460024C12.6847 0.606269 12.8008 0.779917 12.88 0.971044C12.9592 1.16217 13 1.36703 13 1.57392C13 1.78081 12.9592 1.98567 12.88 2.17679C12.8008 2.36792 12.6847 2.54157 12.5384 2.68781L7.09492 8.1313C7.01465 8.21187 6.91038 8.26419 6.79781 8.28038L5.06555 8.52815C4.98482 8.53974 4.9025 8.53236 4.82512 8.5066C4.74774 8.48084 4.67742 8.4374 4.61975 8.37973C4.56208 8.32206 4.51864 8.25175 4.49288 8.17436C4.46712 8.09698 4.45974 8.01466 4.47133 7.93393L4.7191 6.20167C4.73501 6.08923 4.78695 5.98498 4.86713 5.90456L10.3117 0.461074C10.607 0.165849 11.0075 0 11.425 0C11.8426 0 12.2431 0.165849 12.5384 0.461074V0.460024Z"
        fill="url(#paint1_linear_338_7453)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_338_7453"
          x1="0"
          y1="6.69609"
          x2="12.5982"
          y2="6.69609"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_338_7453"
          x1="4.466"
          y1="4.26674"
          x2="13"
          y2="4.26674"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C51A5" />
          <Stop offset="1" stop-color="#CB5E98" />
        </LinearGradient>
      </Defs>
    </>,
  ],
});

//  demo
export const DemoIcon = createIcon({
  viewBox: '0 0 26 28',
  path: [
    <>
      <Path
        d="M26 14.0006C26 13.205 25.6839 12.4419 25.1213 11.8793C24.5587 11.3167 23.7956 11.0006 23 11.0006H14V9.87565C14.8583 9.6527 15.6185 9.15136 16.1613 8.45014C16.7042 7.74893 16.9992 6.88745 17 6.00065C17 2.50065 13.695 0.2619 13.555 0.16815C13.3907 0.0585106 13.1975 0 13 0C12.8025 0 12.6093 0.0585106 12.445 0.16815C12.305 0.2619 9 2.50065 9 6.00065C9.00084 6.88745 9.2958 7.74893 9.83867 8.45014C10.3815 9.15136 11.1417 9.6527 12 9.87565V11.0006H3C2.20435 11.0006 1.44129 11.3167 0.87868 11.8793C0.316071 12.4419 0 13.205 0 14.0006V16.9169C0.00102599 18.0078 0.351484 19.0697 1 19.9469V25.0006C1 25.7963 1.31607 26.5594 1.87868 27.122C2.44129 27.6846 3.20435 28.0006 4 28.0006H22C22.7956 28.0006 23.5587 27.6846 24.1213 27.122C24.6839 26.5594 25 25.7963 25 25.0006V19.9469C25.6485 19.0697 25.999 18.0078 26 16.9169V14.0006ZM11 6.00065C11 4.3044 12.25 2.94315 13 2.2769C13.75 2.94315 15 4.3044 15 6.00065C15 6.53108 14.7893 7.03979 14.4142 7.41486C14.0391 7.78994 13.5304 8.00065 13 8.00065C12.4696 8.00065 11.9609 7.78994 11.5858 7.41486C11.2107 7.03979 11 6.53108 11 6.00065ZM2 14.0006C2 13.7354 2.10536 13.4811 2.29289 13.2935C2.48043 13.106 2.73478 13.0006 3 13.0006H23C23.2652 13.0006 23.5196 13.106 23.7071 13.2935C23.8946 13.4811 24 13.7354 24 14.0006V16.9169C24 18.5731 22.6925 19.9557 21.085 19.9994C20.684 20.0108 20.2849 19.9416 19.9111 19.796C19.5374 19.6504 19.1966 19.4314 18.909 19.1518C18.6213 18.8722 18.3927 18.5378 18.2366 18.1683C18.0805 17.7988 18 17.4018 18 17.0006C18 16.7354 17.8946 16.4811 17.7071 16.2935C17.5196 16.106 17.2652 16.0006 17 16.0006C16.7348 16.0006 16.4804 16.106 16.2929 16.2935C16.1054 16.4811 16 16.7354 16 17.0006C16 17.7963 15.6839 18.5594 15.1213 19.122C14.5587 19.6846 13.7956 20.0006 13 20.0006C12.2044 20.0006 11.4413 19.6846 10.8787 19.122C10.3161 18.5594 10 17.7963 10 17.0006C10 16.7354 9.89464 16.4811 9.70711 16.2935C9.51957 16.106 9.26522 16.0006 9 16.0006C8.73478 16.0006 8.48043 16.106 8.29289 16.2935C8.10536 16.4811 8 16.7354 8 17.0006C8.00016 17.4019 7.91984 17.799 7.76379 18.1687C7.60774 18.5383 7.37913 18.8729 7.09148 19.1526C6.80384 19.4323 6.46302 19.6515 6.08917 19.7972C5.71533 19.9428 5.31606 20.012 4.915 20.0006C3.3075 19.9556 2 18.5731 2 16.9169V14.0006ZM22 26.0006H4C3.73478 26.0006 3.48043 25.8953 3.29289 25.7078C3.10536 25.5202 3 25.2659 3 25.0006V21.5706C3.58536 21.8359 4.21762 21.9821 4.86 22.0006C5.52832 22.0214 6.19394 21.9069 6.81688 21.664C7.43982 21.421 8.00722 21.0547 8.485 20.5869C8.67154 20.4051 8.84373 20.2091 9 20.0006C9.46574 20.6216 10.0697 21.1256 10.7639 21.4728C11.4582 21.8199 12.2238 22.0006 13 22.0006C13.7762 22.0006 14.5418 21.8199 15.2361 21.4728C15.9303 21.1256 16.5343 20.6216 17 20.0006C17.1568 20.2083 17.3294 20.4034 17.5163 20.5844C18.4465 21.4956 19.6978 22.0043 21 22.0006H21.1425C21.784 21.9817 22.4154 21.8356 23 21.5706V25.0006C23 25.2659 22.8946 25.5202 22.7071 25.7078C22.5196 25.8953 22.2652 26.0006 22 26.0006Z"
        fill="#FFE03B"
      />
    </>,
  ],
});
