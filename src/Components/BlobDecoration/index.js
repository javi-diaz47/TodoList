import React from 'react';
import {ReactComponent as BlueDecoration} from './icons/blob-blue-mobile.svg';
import {ReactComponent as YellowDecoration} from './icons/blob-yellow-mobile.svg';
import {ReactComponent as OrangeDecoration} from './icons/blob-orange-mobile.svg';

import './BlobDecoration.css';

function BlobDecoration(){

    return (
        <>

            <BlueDecoration className="blob" id="blob-blue"/>
            
            <OrangeDecoration className="blob" id="blob-orange"/>

            <YellowDecoration className="blob" id="blob-yellow"/>

        </>
    );

}

export { BlobDecoration };