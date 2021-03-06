import React, {Component} from 'react';
import {ToDoComponent} from "./ToDoComponent";




export interface IToDosComponentProps {
}

export interface IToDosComponentState {
    toDoName: string;
    errorMessage: string,
    TODOS: { id: number; name: string; isDone: boolean }[];

}

export class ToDosListComponent extends Component<IToDosComponentProps, IToDosComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            toDoName: "", errorMessage: "", TODOS: [
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
            ]
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
                        <span className="errorMessage">{this.state.errorMessage}</span>



                    <button onClick={this.addToDo}><img src='plus.svg' height='25px' width='25px'/></button>
                </div>
                {this.getTODOS().map((el) => {
                    return <ToDoComponent todo={el} onTodoToggle={this.setIsDone} onTodoDelete={this.todoDelete}/>
                })}
            </div>)
    }

    private setIsDone = (todo: any) => {
        this.setState({
            TODOS: this.state.TODOS.map(t => t.id === todo.id ? {...todo, isDone: !todo.isDone} : t)
        });
    }

    private addToDo() {
        if(this.state.toDoName === "") {
            this.setState( {
                errorMessage:"This field can not be empty"
            })
        } else {
        let id = this.state.TODOS.length;
        this.setState(state => {
            return {
                ...state, TODOS: [...state.TODOS, {id: id, name: this.state.toDoName, isDone:false}], toDoName:"", errorMessage:""}
        })
    }}


    private setToDoName(value: string) {
        this.setState({toDoName: value})

    }

    private getTODOS() {
        const {toDoName} = this.state;

        return this.state.TODOS.filter(element => element.name.includes(toDoName))

    }

    private todoDelete = (todo:any) => {
        this.setState({
            TODOS: this.state.TODOS.filter(element => element !==todo)}
        );
    }
}
