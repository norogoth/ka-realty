import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const Monthly_housing_report = () => {
    return (
        <MainLayout buyOrSell="buy">
            <PdfViewer filePath={'/housing_report.pdf'}/>
        </MainLayout>
    )
}

export default Monthly_housing_report
