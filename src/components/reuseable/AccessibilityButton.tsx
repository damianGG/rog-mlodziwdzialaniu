"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AccessibilityButton() {
    const [isBlue, setIsBlue] = useState<boolean>(false);
    const [fontSize, setFontSize] = useState<number>(16);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const toggleTheme = () => {
        const newTheme = isBlue ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setIsBlue(!isBlue);
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
        setFontSize((prevFontSize) => {
            const newFontSize = prevFontSize - 2;
            document.documentElement.style.fontSize = `${newFontSize}px`;
            return newFontSize;
        });
    };

    const resetFontSize = () => {
        setFontSize(16);
        document.documentElement.style.fontSize = `16px`;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="ms-5 " style={{ display: "flex", justifyContent: "flex-end", position: "fixed", top: "13rem", right: "0", zIndex: "100" }}>
            <button
                id="blackWhiteContrast"
                className="contrast-button"
                onClick={toggleMenu}
                style={{ background: 'none', border: 'none' }}
            >
                <Image
                    id="cartIcon"
                    src="/img/wozek.png"
                    alt="Biało-czarny"
                    width={56}
                    height={56}
                />
            </button>
            {isMenuOpen && (
                <div ref={menuRef} className="accessibility-menu" style={{ position: "absolute", right: 0, top: "100%", background: "#fff", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", borderRadius: "4px", padding: "10px", zIndex: 1000, display: "flex", flexDirection: "column", width: "max-content" }}>
                    <button className="zoomInButtonCart mb-2" onClick={increaseFontSize} style={{ display: "block", width: "100%", textAlign: "left", padding: "5px 10px", height: "auto" }}>
                        + Powiększenie tekstu
                    </button>
                    <button className="zoomOutButtonCart mb-2" onClick={decreaseFontSize} style={{ display: "block", width: "100%", textAlign: "left", padding: "5px 10px", height: "auto" }}>
                        - Pomniejszenie tekstu
                    </button>
                    <button className="resetZoomButtonCart mb-2" onClick={resetFontSize} style={{ display: "block", width: "100%", textAlign: "left", padding: "5px 10px", height: "auto" }}>
                        Resetuj rozmiar tekstu
                    </button>
                    <button className="contrast-buttonCart mb-2" onClick={toggleTheme} style={{ display: "block", width: "100%", textAlign: "left", padding: "5px 10px", height: "auto" }}>
                        {isBlue ? "Wysoki kontrast wyłącz" : "Wysoki kontrast włącz"}
                    </button>
                    {/* Możesz dodać dodatkowe opcje tutaj */}
                </div>
            )}
        </div>
    );
}