import React from 'react'
import ListItem from './ListItem'
import { Todo } from './App'

interface Props {
    items: Todo[]
    onButtonClick: () => void
}

function List(props: Props) {
    console.log(props.items)
    return (
        <div>
            <button onClick={props.onButtonClick}>Click me!</button>
            <ul>
                {props.items.map((item) => <ListItem todo={item}/>)}
            </ul>
        </div>
    )
}

export default List