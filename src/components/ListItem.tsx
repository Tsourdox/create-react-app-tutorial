import React from 'react'
import { Todo } from './App'

interface Props {
    todo: Todo
}

export default function ListItem(props: Props) {
    return <li>{props.todo.title}</li>
}