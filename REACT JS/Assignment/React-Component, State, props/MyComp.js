import { Component } from "react";

//Phase 1
class MyComp extends Component {
    constructor(props) {
        console.log("Call constructor");
        super(props)
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return { name: props.name };
    }


    render() {
        console.log("rendering called");

        return (
            <div>
                <h1>My full name is {this.state.name}</h1>
                <button onClick={() => { this.setState({ age: 40, city: 'JND' }) }}>Click Me!</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentdidmount called");
    }

//Phase 2
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
        return prevProps
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is calld");
      }
}

export default MyComp