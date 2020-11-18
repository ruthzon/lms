function handleImage(e) {
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (file.size / 1024 / 1024 > 2) alert('File size exceeds 2 MB');
      else return (reader.result);
      
    };
  }

export{handleImage};