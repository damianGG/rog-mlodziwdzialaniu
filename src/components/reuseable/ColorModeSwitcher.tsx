import Image from "next/image";
import { useState } from "react";

export default function ColorModeSwitcher() {
    const [isBlue, setIsBlue] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [imageSrc, setImageSrc] = useState('/img/bw.svg');

    const toggleTheme = () => {
        const newTheme = isBlue ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setIsBlue(!isBlue);

        // Zmiana linku do obrazka
        const newImageSrc = isBlue ? '/img/bw.svg' : '/img/bw-active-1.svg';
        setImageSrc(newImageSrc);
    };

    const increaseFontSize = () => {
        setFontSize((prevFontSize) => {
            const newFontSize = prevFontSize + 2;
            if (newFontSize <= 24) {
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            } else {
                return prevFontSize;
            }
        });
    };

    const decreaseFontSize = () => {
        setFontSize((prevFontSize) => prevFontSize - 2);
        document.documentElement.style.fontSize = `${fontSize - 2}px`;
    };

    const resetFontSize = () => {
        setFontSize(16);
        document.documentElement.style.fontSize = `16px`;
    };
    return (

        <div
            className="ms-5"
            style={{ display: "flex", justifyContent: "flex-end" }}
        >
            <button className="zoomInButton" style={{}} onClick={increaseFontSize}>
                +
            </button>
            <button className="resetZoomButton" style={{}} onClick={resetFontSize}>
                A
            </button>
            <button className="zoomOutButton" style={{}} onClick={decreaseFontSize}>
                -
            </button>
            <button id="blackWhiteContrast" className="contrast-button" style={{}} onClick={toggleTheme}>
                <Image
                    id="blackWhiteImage"
                    src={imageSrc}
                    alt="Biało-czarny"
                    width={26}
                    height={26}
                />
            </button>

        </div>
    )
}
