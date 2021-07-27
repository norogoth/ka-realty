import React from 'react'
import MainLayout from '../../components/mainLayout'
import PdfViewer from '../../components/pdfViewer'

const TitleAndEscrow = () => {
    return (
        <div>
            <MainLayout buyOrSell="buy">
                <PdfViewer filePath={'/LT_Guide_to_title_and_escrow.pdf'}/>
            </MainLayout>
        </div>
    )
}

export default TitleAndEscrow
