
import React from 'react';

class Userclass extends React.Component {

    constructor() {
        super()
        this.state = {   // all the state variables will stored in this object.
            username: {},
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/parvas662");
        const json = await data.json();
        this.setState({
            username: json
        })
    }

    componentDidUpdate() {
        //console.log("Component Did Update");
    }

    componentWillUnmount() {
        //console.log("Component Will Unmount");
    }

    render() {
        console.log(this.state.username)
        const { login, avatar_url } = this.state.username
        console.log(login)
        return (
            <div>
                <img src={avatar_url} alt="Profile_Picture" />
                <h2>Name: {login} </h2>
                <h4>Contact: parvassharma662@gmail.com</h4>
            </div>
        )
    }
}
export default Userclass


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */