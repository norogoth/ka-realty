import React from 'react'
import MainLayout from '../../components/mainLayout'

const Buy = ({location}) => {
    console.log("name: ",location.state);

    return (
        <MainLayout>
            <p>buy works</p>
        </MainLayout>
    )
}

export default Buy
