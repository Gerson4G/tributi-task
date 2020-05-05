import React from 'react';

export default class ThankYouPage extends React.Component {

    render(){
        const { name } = this.props;
        return(
            <>
                <b>{name}</b>, thak you very much for your responses! 
            </>
        );
    }

}