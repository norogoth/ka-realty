import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const Process = () => {
    return (
        <MainLayout buyOrSell="buy">
            <PdfViewer filePath="/home_buying_process.pdf"/>
        </MainLayout>
    )
}

export default Process