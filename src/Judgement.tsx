import React from 'react';

import { JudgmentProps } from './interface/components';

export const Judgment = (props: JudgmentProps) => {
    const { correct } = props;

    return (
        <div id="overlay" isVisible>
            { correct ?
                <div className="container">
                    <h2>正解</h2>
                </div>
                :
                <div className="container">
                    <h2>不正解</h2>
                </div>
            }
        </div>
    )
};