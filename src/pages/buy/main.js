import React from 'react'
import MainLayout from '../../components/mainLayout'

const Buy = ({location}) => {
    console.log("name: ",location.state);

    return (
        <MainLayout buyOrSell="buy">
            <p>main works</p>
        </MainLayout>
    )
}

export default Buy
