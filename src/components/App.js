import React from 'react';
import { withRouter } from 'react-router';
import { APP_ROUTES } from '../utils/appRoutes';
import Header from './header/header';
import Profession from './profession/professions';
import Counsellor from './counsellors/counsellor';
import Carousel from './commonComponents/carousel';

class App extends React.Component {

  interModuleRouting = (props) => {
    switch( props.location.pathname ){
      case APP_ROUTES.PROFESSION :
        return <Profession  {...props} /> ;
  
      case APP_ROUTES.COUNSELLORS :
        return <Counsellor {...props} />
      default : 
        return <Carousel />;
    }
  }
  render(){
    const componentToRender = this.interModuleRouting(this.props);
    return (
      <div>
        <Header />
        <div style={{width:'100%'}}> { componentToRender } </div>
      </div>
      );
    }
}
  


export default withRouter( App );
