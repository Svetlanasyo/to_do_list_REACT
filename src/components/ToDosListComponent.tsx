import React, {Component} from 'react';
import {ToDoComponent} from "./ToDoComponent";


export interface IToDosComponentProps {
}

export interface IToDosComponentState {
}

export class ToDosListComponent extends React.Component<IToDosComponentProps, IToDosComponentState> {

    private TODOS = [
        {
            name: "Clean room",
            isDone: false
        },
        {
            name: "Write function",
            isDone: false
        },
        {
            name: "Go sleep",
            isDone: true
        }
    ];

    render(): React.ReactElement<any> {

        return ( <div>
            {this.TODOS.map((el) => {
            return <ToDoComponent toDoName={el.name} isDone={el.isDone}/>})}
        </div>)
    }

}