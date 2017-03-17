import React from 'react';

import Cheese from './cheese';

export default class CheeseList extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const cheeses = this.props.cheeses.map((cheese, i) => {
            return <li key={i}>{cheese}</li>
        });
        return (
            <ul>
                {cheeses}
            </ul>
        );
    }


};
