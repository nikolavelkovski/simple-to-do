
import * as React from 'react';


export interface BackDropProps {
    onCancel: Function
}

export function BackDrop(props: BackDropProps) {
    return (
        <div className='backdrop' onClick={() => props.onCancel()}>

        </div>
    );
}
