import { useEffect } from "react";

function PinterestBoard() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.pinterest.com/js/pinit.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <a
            data-pin-do="embedBoard"
            data-pin-board-width="400"
            data-pin-scale-height="240"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/lovuqq/inv/"
        >
            view on pinterest
        </a>
    );
}

export default PinterestBoard;