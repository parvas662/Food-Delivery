
import React from 'react';

class GitDataclass extends React.Component {
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
            <div  className=" flex-col place-items-center p-4">
                <h1 className="text-bold text-3xl mb-5">GitHub Profile</h1>
                <img className='w-60 ' src={avatar_url} alt="Profile_Picture" />
                <h2  className="my-2  text-bold">Name: {login} </h2>
                <h4 className="my-2 "><b>Contact :</b> parvassharma662@gmail.com</h4>
            </div>
        )
    }
}
export default GitDataclass


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