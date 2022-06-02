import { useState } from "react"

export const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    })

    return [width, height];
}