import React, {Component} from 'react';
import './ToDoComponent.css';


export interface IToDoComponentProps {
    todo: {
        id: number;
        name: string;
        isDone: boolean;
    }
    onTodoToggle: (todo: {id: number,
    name: string,
    isDone: boolean}) => void;
}

export class ToDoComponent extends Component<IToDoComponentProps, any> {

    public render(): React.ReactElement<IToDoComponentProps> {

        if (this.props.todo.isDone) {
            return (
                <div className='todo'>
                    <img className='todoImage'
                         src={'checkmark.svg'}
                         alt={""}
                         onClick={() => this.props.onTodoToggle(this.props.todo)}
                    />
                         <label className='todoNameLabel'> {this.props.todo.name}</label>
                </div>
            );
        } else {
            return (
                <div className='todo'>
                    <img className='todoImage'
                         src={'uncheck.svg'}
                         alt={""}
                         onClick={() => this.props.onTodoToggle(this.props.todo)}
                    />
                    <label className='todoNameLabel'> {this.props.todo.name}</label>
                </div>
            );
        }
    }
}
