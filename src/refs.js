
const MyFunction = (props) => {
    return (
        <input type="text" ref={props.email} />

    )
}

const CustomeFunction = () => {
    let email = null;

    const onClick = () => {
        email.focus()
    }
    return (

        <div>
            <span> input</span>
            <MyFunction email={(input) => { email = input }} />

            <input type="submit" value="submit" onClick={onClick} />
        </div>

    )
}
class App extends Component {
    onClick = () => {
        alert(`${this.firstname.value}`)
    }
    onKeyUp = (target, e) => {
        // console.log()
        if (e.keyCode === 13) {
            switch (target) {
                case "firstname":
                    this.lastname.focus();
                    break;
                case "lastname":
                    this.age.focus();
                    break;
                case "age":
                    this.submit.focus();
                    break;

                default: this.lastname.focus();
            }
        }
    }
    render() {
        return (
            <div>
                <CustomeFunction />
                <div>
                    <span>firstname</span>
                    <input ref={(input) => { this.firstname = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'firstname')}
                        type="text" />
                </div>
                <div>
                    <span>lastname</span>
                    <input type="text" ref={(input) => { this.lastname = input }} onKeyUp={this.onKeyUp.bind(this, 'lastname')} />
                </div>
                <div>
                    <span>age</span>
                    <input type="text" ref={(input) => { this.age = input }} onKeyUp={this.onKeyUp.bind(this, 'age')} />
                </div>
                <input type="submit" value="submit" ref={(input) => { this.submit = input }} onClick={this.onClick} />
            </div>
        );
    }
}

export default App;
