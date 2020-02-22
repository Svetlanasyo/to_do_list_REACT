import React, {Component} from 'react';
import {ToDoComponent} from "./ToDoComponent";


export interface IToDosComponentProps {
}

export interface IToDosComponentState {
    toDoName: string;
    TODOS: { name: string; isDone: boolean }[];
    filteredTODOS: {name: string; isDone: boolean}[];
    isFindEvent: boolean;
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
            ], filteredTODOS: [],
            isFindEvent: false
        };
        this.addToDo = this.addToDo.bind(this);
        this.findToDo = this.findToDo.bind(this);
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
                    <button onClick={this.findToDo}><img src='find.svg' height='25px' width='25px'/></button>
                    <button onClick={this.addToDo}><img src='plus.svg' height='25px' width='25px'/></button>
                </div>
                {(!this.state.isFindEvent ? this.state.TODOS : this.state.filteredTODOS).map((el) => {
                    return <ToDoComponent toDoName={el.name} isDone={el.isDone}/>
                })}
            </div>)
    }

    private addToDo() {

        this.setState(state => {
            return {
                ...state, TODOS: [...state.TODOS, {name: this.state.toDoName, isDone:false}].reverse(), isFindEvent:false}
        })
    }


    private findToDo() {

        let value = this
        function isInTODOS (element:any) {
            return element.name.includes(value.state.toDoName);
        }

        this.setState(state => {
            return {
                filteredTODOS: state.TODOS.filter(isInTODOS), isFindEvent: true}
        })
    }


    private setToDoName(value: string) {
        this.setState({toDoName: value, isFindEvent:false})
    }

}
