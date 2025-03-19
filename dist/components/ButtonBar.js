// At the top of the file, add this line:
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
    const handleClick = () => {
        // Handle the click event for both redirect and download
        window.open(link, "_blank");
        const a = document.createElement("a");
        a.href = link;
        a.setAttribute("download", "");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (_jsx(Button, { className: "button-custom-color m-1", onClick: handleClick, children: button_text }));
};
export default ButtonBar;
