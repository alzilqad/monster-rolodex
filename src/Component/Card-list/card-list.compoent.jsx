import React from 'react';
import './card-list.styles.css';
import {Card} from './card.component.jsx'

export const CardList = props => (
    <div className="card-list">
        {props.employees.map(employee => (
            <Card key={employee.id} monster={employee} />
            ))
        }
    </div>
)