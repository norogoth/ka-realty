import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const Seller_roadmap = () => {
    return (
        <MainLayout buyOrSell="sell">
            <PdfViewer filePath="/seller's roadmap.pdf"/>
        </MainLayout>
    )
}

export default Seller_roadmap
