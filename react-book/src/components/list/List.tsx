import React, {memo, useMemo, useCallback, useEffect} from 'react'

interface ListProps {
    elements: string[]
}

const ListElement = ({ elements }: ListProps): JSX.Element => {
    const calculus = useMemo(() => 1 + 2, [])
    const handleClick = useCallback((event: any) => {
        console.log(event.currentTarget.textContent)
    }, [])
    return (
        <ul>
            { elements.map((element, index) => { 
                    return (
                        <li key={`${element}-${index}`} onClick={handleClick}>
                            {element}
                        </li>
                    )})
            }
            </ul>
        )
}

export default memo(ListElement);
    