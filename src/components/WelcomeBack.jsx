import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ImageUploader() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
  };

  const handleExportClick = () => {
    // Code to export the combined image
    // For simplicity, let's just open the image in a new tab for now
    const combinedImage = document.createElement('img');
    combinedImage.src = uploadedImage;
    combinedImage.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = combinedImage.width;
      canvas.height = combinedImage.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(combinedImage, 0, 0);
      ctx.drawImage(document.getElementById('p1_sm'), 0, 0);
      const combinedDataURL = canvas.toDataURL('image/png');
      const newWindow = window.open();
      newWindow.document.write('<img src="' + combinedDataURL + '" width="100%">');
    };
  };

  return (
    <div>
       <button onClick={() => navigate('/')}>back to main page</button>
      <h1>What's inside her chest?</h1>
      <h5>Click upload file button to add a pic in her chest.screenshot to save the result.</h5>
      <h5>square pics are more perferred when uploading!</h5>
      <div>
        <input type="file" onChange={handleImageUpload} />
        <button onClick={handleDeleteImage}>Delete Image</button>
        {/* <button onClick={handleExportClick}>Export Combined Image</button> */}
      </div>
      <div style={{ position: 'relative', width: '70%', height: 'auto', margin: '0 auto' }}>
        <img src='p1_sm.png' alt="p1_sm" style={{ width: '100%', position: 'absolute', zIndex: 3, left: 0 }} id="p1_sm" />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '76%', paddingTop: '70%', marginTop: '24%', marginLeft: '20%', overflow: 'hidden', zIndex: 1 }}>
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
          ) : (
            <img src='default.png' alt="Default" style={{ width: '100%', position: 'absolute', top: 0, left: 0 }} />
          )}
        </div>
      </div>
      
    </div>
  );
}

export default ImageUploader;
