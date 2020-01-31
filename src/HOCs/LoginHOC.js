import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const LoginHOC = WrappedComponent => {
    return class extends React.Component {

        authorized = () => {
            console.log('props in HOC authorize', this.props)
            return this.props.loggedIn
        }

        render(){
            return this.authorized() ? (
                <WrappedComponent {...this.props}/>
            ) : (
                <Redirect to='/profile' />
            );
        }
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.loggedIn
    }
  }
  

export default connect(mapStateToProps)(LoginHOC);