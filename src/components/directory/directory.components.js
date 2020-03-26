import React from 'react'
import './directory.style.scss';
import {connect} from 'react-redux';

import MenuItem from '../menu-item/menu-items.component.js';
import {selectDirectorySections} from '../../redux/directory/direactory.selectors'
import { createStructuredSelector } from 'reselect';


const Directory = ({sections}) => {
        return(
            <div className="directory">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
    
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory);