import React, { useState, useEffect } from "react";

const MobilePrompt = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px) or (pointer: coarse");

        setIsDesktop(mediaQuery.matches);

        const handleDeviceChange = (e) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener("change", handleDeviceChange);
        return () => mediaQuery.removeEventListener("change", handleDeviceChange);
    }, []);

    if (!isDesktop) return null;

    return (
        <div>
            <p className="text">i've detected you are not on your phone. switch to your phone please so it looks better</p>
        </div>
    )
}

export default MobilePrompt;