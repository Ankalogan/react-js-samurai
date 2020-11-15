import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Denis</div>
                <div className={s.dialog + ' ' + s.x}>Sasha</div>
                <div className={s.dialog}>Lesha</div>
                <div className={s.dialog}>Pasha</div>
                <div className={s.dialog}>Masha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HELLO</div>
                <div className={s.message}>WELCOME</div>
                <div className={s.message}>TO CLUTCH</div>
            </div>

        </div>
    )
}
export default Dialogs