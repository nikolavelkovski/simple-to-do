import * as React from 'react';
import { BackDrop } from '../UI/Backdrop';
import { Modal } from '../UI/Modal';

export interface ToDoProps {
    text?: string
}

export default function ToDo(props: ToDoProps) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    const closeModalHandler = () => {
        setModalIsOpen(false)
    }
    const deleteHandler = () => {
        setModalIsOpen(true)
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler} >
                    Delete
                </button>
            </div>
            {modalIsOpen && <Modal onConfirm={() => { alert("You have clicked on confirm but nothing happend!  "); closeModalHandler() }} onCancel = {() => {closeModalHandler()}}/>}
            {modalIsOpen && <BackDrop onCancel = {() => {closeModalHandler()}}/>}
        </div>
    );
}
