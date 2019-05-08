import React from 'react';
import source from '../../assets/people1.jpg';
import source1 from '../../assets/dood.jpg';
import source2 from '../../assets/dood1.jpg';
import source3 from '../../assets/dood2.jpg';

class Carousel extends React.Component {
    constructor(){
        super();
        this.state = {
            sourceFile : source,
            srcArr : [ source1, source2, source3 ],
            copy : [source, source1, source2, source3]
        }
        this.abc();
    }

    abc = () => {
        setInterval(()=> {
            const prevState = { ...this.state };
            prevState.sourceFile = prevState.srcArr[0];
            prevState.srcArr = prevState.srcArr.length > 1 ? prevState.srcArr.splice(1) : [ ...prevState.copy];
            this.setState(prevState);
         }, 2000);    
    }
    
    render(){
        
        return(
            <div style={{width:'70%', margin:'20px auto'}}>
                <img style={{borderRadius:'10px', textAlign:'center'}}  alt='a' 
                    src={this.state.sourceFile} width='100%' height='400px' />
            </div>
        );
    }
};

export default Carousel;