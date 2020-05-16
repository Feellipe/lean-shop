import React from 'react'
import {connect} from 'react-redux';

import MenuItem from '../menu-item/menu-items.component.js';
import {selectDirectorySections} from '../../redux/directory/direactory.selectors'
import { createStructuredSelector } from 'reselect';
import {DirectoryContainer} from './directory.styles'


const Directory = ({sections}) => {
        return(
            <DirectoryContainer>
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
    
            </DirectoryContainer>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory);