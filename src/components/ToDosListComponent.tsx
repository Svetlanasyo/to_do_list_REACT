import React, {Component} from 'react';
import {ToDoComponent} from "./ToDoComponent";


export interface IToDosComponentProps {
}

export interface IToDosComponentState {
    toDoName: string;
    TODOS: { id: number; name: string; isDone: boolean }[];
    isFindEvent: boolean;
}

export class ToDosListComponent extends Component<IToDosComponentProps, IToDosComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            toDoName: "", TODOS: [
                {
                    id: 0,
                    name: "Clean room",
                    isDone: false
                },
                {
                    id: 1,
                    name: "Write function",
                    isDone: false
                },
                {
                    id: 2,
                    name: "Go sleep",
                    isDone: true
                }
            ],
            isFindEvent: false
        };
        this.addToDo = this.addToDo.bind(this);
    }

    render(): React.ReactElement<any> {

        return (
            <div>
                <div>
                    <img src='find.svg' height='25px' width='25px'/>
                    <input
                        type='text'
                        placeholder="Enter new task"
                        onChange={event => this.setToDoName(event.target.value)}/>



                    <button onClick={this.addToDo}><img src='plus.svg' height='25px' width='25px'/></button>
                </div>
                {this.getTODOS().map((el) => {
                    return <ToDoComponent todo={el} onTodoToggle={this.setIsDone}/>
                })}
            </div>)
    }

    private setIsDone = (todo: any) => {
        this.setState({
            TODOS: this.state.TODOS.map(t => t.id === todo.id ? {...todo, isDone: !todo.isDone} : t)
        });
    }

    private addToDo() {

        let id = this.state.TODOS.length;
        this.setState(state => {
            return {
                ...state, TODOS: [...state.TODOS, {id: id, name: this.state.toDoName, isDone:false}], toDoName:""}
        })
    }


    private setToDoName(value: string) {
        this.setState({toDoName: value, isFindEvent:false})

    }

    private getTODOS() {
        const {toDoName} = this.state;

        return this.state.TODOS.filter(element => element.name.includes(toDoName))

    }
}
