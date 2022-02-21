import * as React from 'react';

export interface ModalProps {
    onCancel: Function,
    onConfirm: Function,

}

export function Modal(props: ModalProps) {
    return (
        <div className="modal">
            <p> Are you sure</p>
            <button className='btn btn--alt' onClick={() => props.onCancel()}>
                Cancel
            </button>
            <button className='btn ' onClick={() => props.onConfirm()}>
                Confirm
            </button>
        </div>
    );
}
