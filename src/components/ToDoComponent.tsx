import React, {Component} from 'react';
import 'ToDoComponent.css';


export interface IToDoComponentProps {
    toDoName: string;
    isDone: boolean;
}

export class ToDoComponent extends Component<IToDoComponentProps, any> {

    public render(): React.ReactElement<IToDoComponentProps> {

        if (this.props.isDone) {
            return (
                <div className='todo'>
                    <img className='todoImage'
                         src={'www.google.com'}
                         alt={""}/>
                         <label className='todoNameLabel'> {this.props.toDoName}</label>
                </div>
            );
        } else {
            return (
                <div className='todo'>
                    <img className='todoImage'
                         src={'www.google.com'}
                        alt={""}/>
                    <label className='todoNameLabel'> {this.props.toDoName}</label>
                </div>
            );
        }
    }
}