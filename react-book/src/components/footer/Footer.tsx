import React from 'react'

interface Props {
    title: string
}

const Footer = (props: Props): JSX.Element => {
    return (<h1>
        {props.title}
    </h1>)
}

export default Footer