import React from 'react';
import PortalModal from '../Modal/Portal'
import { Overlay, Dialog } from './style'

const Modal =({children, open,  onClose}) => {
    if(!open) return null;

    function onOverlayClick(){
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation();

    }


    return (
        <PortalModal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}> {children} </Dialog>
            </Overlay>
        </PortalModal>

    )

}

export default Modal;