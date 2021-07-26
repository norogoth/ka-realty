import React from 'react'
import MainLayout from '../../components/mainLayout'

const Get_value = () => {
    console.log("get value should be rendering right now so uh.");
    return (
        <MainLayout buyOrSell="sell">
            <h1>It works bruv</h1>
            <p>it works</p>
        </MainLayout>
    )
}

export default Get_value
