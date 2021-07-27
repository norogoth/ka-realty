import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const Monthly_housing_report = () => {
    return (
        <MainLayout buyOrSell="sell">
            <PdfViewer filePath="https://docdro.id/n43ryOO"/>
        </MainLayout>
    )
}

export default Monthly_housing_report
