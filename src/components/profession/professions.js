import React from 'react';

class Profession extends React.Component{
    componentWillMount(){
        if(this.props.location.hash){
            this.props.history.push(this.props.location.pathname);
        }
    }
    render(){
        const componentToRender = intraModuleRouting(this.props);

        const handleIntraRouting = () => this.props.history.push('#engineering');
        return(
            <div>
                <button onClick={handleIntraRouting}>hash change</button>
                { componentToRender }
            </div>
        );
    }
}

function intraModuleRouting(props){
    switch (props.location.hash){
        case '#engineering' :
            return <h1>Engineering</h1>;
        default : 
            return <h1>Default profession</h1>
    }
}



export default Profession;