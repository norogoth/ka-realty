import React from 'react'
import MainLayout from './mainLayout'

const PdfViewer = (props) => {
    return (
        /*
        <object
            data={props.filePath}
            type="application/pdf"
            width="100%"
            height="100%"
        >

            <iframe
            src={props.filePath}
            width="100%"
            height="100%"
            >
            <p>This browser does not support PDF!</p>
            </iframe>

        </object>
        */
       <embed src={props.filePath} width="100%" height="100%"/>
    )
}

export default PdfViewer
