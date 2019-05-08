import React from 'react';
import IdentityCard from '../identityCard/identityCard';
import classes from './counsellor.scss';
import CounsellorsData from './counsellorsData.json';
import CounsellorDetailsJSON from './counsellorsDetails.json';
import { CounsellorDetails } from './counsellorDetails';
 
class Counsellor extends React.Component{

    constructor(){
        super();
        this.state = {
            detailedObj : { }
        }
    }

    componentWillMount(){
        if(window.location.hash)
            window.location.href =  window.location.origin + window.location.pathname;
    }

    handleCounsellorClick = (id) => {
        const counsellorData = CounsellorDetailsJSON[id];
        this.setState({ detailedObj : counsellorData});
    }

    renderSwitch = () => {
        const url = this.props.location.pathname + this.props.location.hash;
        const id = url.slice(url.indexOf('#') + 1); 
        
        switch(url){
            case `/counsellors#${id}` :
                return <CounsellorDetails detailedObj={this.state.detailedObj} />;
            default : 
                const cards = CounsellorsData.map((counsellorData, index ) => 
                <div className={classes.counsellorsContainer} key={index}>
                    <IdentityCard {...this.props} handleCounsellorClick={this.handleCounsellorClick}
                        counsellorData={counsellorData} /> </div> );
                return cards;

        }
    }
    render(){
        return(
            <>
               { this.renderSwitch() }
            </>
        )
    }
}
export default Counsellor;

