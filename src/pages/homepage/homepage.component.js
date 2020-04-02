import React from 'react';

import './homepage.style.scss';
import {HomePageContainer} from './homepage.styles'
import Directory from '../../components/directory/directory.components.js';

const HomePage = () => (
    <HomePageContainer>
        <Directory></Directory>
    </HomePageContainer>
)

export default HomePage;