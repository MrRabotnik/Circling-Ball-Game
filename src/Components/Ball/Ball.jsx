import { useState } from "react";
import "./ball.css"

const Ball = () => {

    const [x, setX] = useState(50)
    const [y, setY] = useState(0)

    const moveBall = () => {
        if (x >= 100 && y < 100) {
            setX(x - 1)
            setY(y + 1)
        } else if (x < 100 && y >= 100) {
            setX(x - 1)
            setY(y - 1)
        } else if (x < 100 && y < 100) {
            setX(x + 1)
            setY(y + 1)
        } else if (x > 0 && y >= 100) {
            setX(x + 1)
            setY(y - 1)
        }

        console.log(x, y)
    }

    const moveBallInterval = setInterval(moveBall, 100)

    return (
        <div className="ball" id="ball" style={{ left: x + "%", top: y + "%"}}>

        </div>
    )
}

export default Ball;