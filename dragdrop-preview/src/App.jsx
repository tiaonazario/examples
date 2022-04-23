import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  const dragEvents = {
    onDragEnter: (e) => {
      e.preventDefault();
    },
    onDragLeave: (e) => {
      e.preventDefault();
    },
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDrop: (e) => {
      e.preventDefault();

      const file = e.dataTransfer.files[0];
      const { name, size } = file;
      const dataImage = { name, size, preview: URL.createObjectURL(file) };

      setImage(dataImage);
    },
  };

  return (
    <div className="container">
      <div className="logo">Logo</div>

      <div className="file-drop" {...dragEvents}>
        <div className="text">Arraste a imagem pra cá</div>
      </div>

      <div className="preview">
        {image !== "" && (
          <div className="image">
            <img src={image.preview} alt={image.name} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
