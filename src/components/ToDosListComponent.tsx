import React, {Component} from 'react';
import {ToDoComponent} from "./ToDoComponent";


export interface IToDosComponentProps {
}

export interface IToDosComponentState {
    toDoName: string;
    TODOS: { name: string; isDone: boolean }[];
}

export class ToDosListComponent extends Component<IToDosComponentProps, IToDosComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            toDoName: "", TODOS: [
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
            ]
        };
        this.addToDo = this.addToDo.bind(this);
    }

    render(): React.ReactElement<any> {

        return (
            <div>
                <div>
                    <input
                        type='text'
                        placeholder="Enter new task"
                        onChange={event => this.setToDoName(event.target.value)}
                    />

                    <button onClick={this.addToDo}><img src='plus.svg' height='25px' width='25px'/></button>
                </div>
                {this.state.TODOS.map((el) => {
                    return <ToDoComponent toDoName={el.name} isDone={el.isDone}/>
                })}
            </div>)
    }

    private addToDo() {

        this.setState(state => {
            return {
                ...state, TODOS: [...state.TODOS, {name: this.state.toDoName, isDone:false}].reverse()}
        })
    }


    private setToDoName(value: string) {
        this.setState({toDoName: value})
    }

}
