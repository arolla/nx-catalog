import React, {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

const Container = ({children}: Props): JSX.Element => {
    return (<div>
        {children}
    </div>)
}

export default Container