import { createGlobalStyle } from 'styled-components';

import MontserratBold from "./Montserrat-ExtraBold.woff";
import MontserratRegular from "./Montserrat-Regular.woff";
import MontserratSemibold from "./Montserrat-SemiBold.woff";

import OpenSansBold from "./OpenSans-Bold.woff";
import OpenSansRegular from "./OpenSans-Regular.woff";

export default createGlobalStyle`
@font-face {
    font-family: 'Montserrat-Bold';
    src: local('Montserrat Bold'), local('Montserrat Bold'),
    url(${MontserratBold}) format('woff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat-Regular';
    src: local('Montserrat Regular'), local('Montserrat Regular'),
    url(${MontserratRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat-SemiBold';
    src: local('Monserrat SemiBold'), local('Monserrat SemiBold'),
    url(${MontserratSemibold}) format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'OpenSans-Bold';
    src: local('OpenSans Bold'), local('OpenSans Bold'),
    url(${OpenSansBold}) format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'OpenSans-Regular';
    src: local('OpenSans Regular'), local('OpenSans Regular'),
    url(${OpenSansRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
}
`