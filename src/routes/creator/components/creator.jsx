import React, {Component} from 'react'

export class Creator extends Component {
    
    componentWillMount() {
        console.log('mounting creator');
        console.log(this.props);
    }

    render() {
        return (
            <section>
                <h1>Course designer</h1>
            </section>
        );
    }

    
}
