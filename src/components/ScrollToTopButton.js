import React from "react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [scrollToTopButton, setscrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setscrollToTopButton(true)
            } else {
                setscrollToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div>
        {scrollToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px",
                borderRadius: "2em",
                cursor: "pointer",
                color: "#0E2954"
            }}
            onClick={scrollUp}
            >
            ^
            </button>
        )}

    </div>
}

export default ScrollToTopButton;