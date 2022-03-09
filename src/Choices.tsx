import React, {useState} from "react";

export default function Choices(){
    const [modal, setModal] = useState(false)
    return(
        <div className='choice-box'>
            <div className='choice' onClick={()=>setModal(true)}>
                <p>{this.props.name}</p>
            </div>
            <div className={`modal_overlay ${modal && "is-opened"}`}>
                <div className="modal_box">
                    <button className="modal_closeBtn" onClick={()=>setModal(false)}>×</button>
                    <div>モーダルテキスト</div>
                </div>
            </div>
        </div>
    );
}