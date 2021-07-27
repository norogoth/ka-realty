import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const Seller_roadmap = () => {
    return (
        <MainLayout buyOrSell="sell">
            <PdfViewer filePath="https://www.docdroid.net/qPj5CCc/srm-pdf"/>
        </MainLayout>
    )
}

export default Seller_roadmap
