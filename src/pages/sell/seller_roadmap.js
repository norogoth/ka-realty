import React from 'react'
import MainLayout from '../../components/mainLayout'

const Seller_roadmap = () => {
    return (
        <MainLayout buyOrSell="sell">
            <object
                data="https://www.docdroid.net/qPj5CCc/srm-pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            >

                <iframe
                src="https://www.docdroid.net/qPj5CCc/srm-pdf"
                width="100%"
                height="100%"
                >
                <p>This browser does not support PDF!</p>
                </iframe>

            </object>
        </MainLayout>
    )
}

export default Seller_roadmap
