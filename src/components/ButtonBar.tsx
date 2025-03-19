// At the top of the file, add this line:
'use client';

import { Button } from 'react-bootstrap';

interface ButtonBarProps {
  button_text: string;
  link: string;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ button_text, link }) => {

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

  return (
    <Button className="button-custom-color m-1" onClick={handleClick}>
      {button_text}
    </Button>
  );
};

export default ButtonBar;
