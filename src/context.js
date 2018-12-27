import React from 'react';

const MyContext = React.createContext();


class MyProvider extends React.Component {
    state = {
        isAuth: false
    }
    componentDidMount() {
        const data = localStorage.getItem("login");
        if (data) {
            this.setState({ isAuth: !this.state.isAuth })
        }
    }
    login = (result) => {
        localStorage.setItem("login", JSON.stringify(result));
        this.setState({ isAuth: true })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isAuth !== nextState.isAuth) {
            return true
        } else {
            return false;
        }
    }
    logout = () => {
        localStorage.removeItem("login");
        this.setState({ isAuth: false })
    }

    render() {
        return (
            <MyContext.Provider value={{
                isAuth: this.state.isAuth,
                login: this.login,
                logout: this.logout

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
const MyContextConsumer = MyContext.Consumer;
export { MyProvider, MyContextConsumer }