import React, { useState } from 'react'

interface Props {
    title: string
    url: string
    person: string
}

const Header = (props: Props): JSX.Element => {
    const { title, person } = props

    const [newTitle, setNewTitle] = useState<string>(title)

    return (
        <>
        <h1 onClick={() => {setNewTitle('bye bye')}}>
            {`${newTitle} ${person}` }
        </h1>
        <input type='text' value={newTitle} />
    </>
    )
}

export default Header
