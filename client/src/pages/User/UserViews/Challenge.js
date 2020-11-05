import React from 'react';
import {TextBoxTypedInput} from "../../common/components";

export const Challenge = () => {

    return (
        <div>
            <TextBoxTypedInput wordCount={5} minChar={5}/>
        </div>
    );
}
