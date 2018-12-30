import React from 'react';

const MyContext = React.createContext();


class MyProvider extends React.Component {
    state = {
        isAuth: false,
        counter: 0,
        cartItem: []
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


        if (this.state.isAuth !== nextState.isAuth || this.state.counter !== nextState.counter || this.state.cartItem !== nextState.cartItem) {
            return true
        } else {
            return false;
        }
    }
    logout = () => {
        localStorage.removeItem("login");
        this.setState({ isAuth: false })
    }
    incraseCounter = (data) => {
        this.setState({ counter: this.state.counter + 1, cartItem: data })
    }
    render() {
        console.log(this.state.cartItem)
        return (
            <MyContext.Provider value={{
                isAuth: this.state.isAuth,
                login: this.login,
                logout: this.logout,
                counter: this.state.counter,
                incraseCounter: this.incraseCounter

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
const MyContextConsumer = MyContext.Consumer;
export { MyProvider, MyContextConsumer }