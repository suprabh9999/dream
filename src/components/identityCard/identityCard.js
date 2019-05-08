import React from 'react';
import classes from './identityCard.scss';
import source from '../../assets/people1.jpg';

const IdentityCard = (props) => {
    const { counsellorData } = props;
    const handleIdentityClick = (id) => {
        props.history.push(`#${id}`);
        props.handleCounsellorClick(id);
    }
    return(
        <div className={classes.identityCardContainer} 
            onClick={() => handleIdentityClick(counsellorData.UID)}>
            <div>
                <img style={{borderRadius:'50px'}} 
                    // src={counsellorData.imgURL } alt='people' width='130' height='130' />
                    src={ source } alt='people' width='130' height='130' />
            </div>
            <div>{`Ex-${counsellorData.experience} yrs`}</div>
            <div>{ counsellorData.name }</div>
            
            <div>{ counsellorData.profession }</div>
        </div>
    );
};

export default IdentityCard;