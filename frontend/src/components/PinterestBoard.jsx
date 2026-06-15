import { useEffect } from "react";

function PinterestBoard({ boardUrl, scaleWidth = 120, boardWith = 400, scaleHeight = 400 }) {
    useEffect(() => {
        const scriptId = "pinit-script";
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.async = true;
            script.defer = true;
            script.src = "https://pin.it/2vwe5gIBn";
            document.body.appendChild(script);
        } else if (window.doBuild) {
            window.doBuild();
        }
    }, [boardUrl])

    return (
        <div className="pin-board-container">
            <a
                data-pin-do="embedBoard"
                data-pin-scale-width={scaleWidth}
                data-pin-scale-height={scaleHeight}
                data-pin-board-width={boardWidth}
                href={boardUrl}
            >
                View board on Pinterest
            </a>
        </div>
    )
}

export { PinterestBoard };