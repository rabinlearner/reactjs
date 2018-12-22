import React from 'react';
export const MyContext = React.createContext();


class MyProvider extends React.Component {
    state = {
        login: false
    }



    render() {
        return (
            <MyContext.Provider value={{
                login: this.state.login,
                changeState: () => this.setState({ login: true })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;