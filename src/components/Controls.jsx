import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef()
    const handleIncrement = () => {
        dispatch({
            type: "INCREMENT",
        })
    }
    const handleDecrement = () => {
        dispatch({
            type: "DECREMENT",
        });
    }
    const handlePrivacyToggle = () => {
        dispatch({
            type: "PRIVACYTOGGLE",
        });
    }
    const handleAdd = () => {
        dispatch({
            type: "ADD",
            payload: {
                value: inputElement.current.value
            },

        });
        inputElement.current.value = "";
    }
    const handleSub = () => {
        dispatch({
            type: "SUBSTRACT",
            payload: {
                value: inputElement.current.value
            },
        });
        inputElement.current.value = "";
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-danger" onClick={handlePrivacyToggle}>Privacy</button>

            </div>
            <div className='fld-grid gap-2 d-sm-flex justify-content-sm-centerex control-row'>
                <input type="text" ref={inputElement} className='number-input' />

                <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
                <button type="button" className="btn btn-warning" onClick={handleSub}>Substract</button>
            </div>
        </>
    )
}

export default Controls;