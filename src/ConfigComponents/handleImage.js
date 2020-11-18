async function handleImage(e, func) {
  let file = e.target.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    // if(!e.target.files[0]) return;
    if (file.size / 1024 / 1024 > 2) alert('File size exceeds 2 MB');
    else {
      console.log(reader.result);
      func(reader.result);
    }
  };
}
async function handleImageById(e, func,id) {
  let file = e.target.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    if (file.size / 1024 / 1024 > 2) alert('File size exceeds 2 MB');
    else {
      console.log(reader.result);
      func([reader.result, id]);
    }
  };
}
export{handleImage,handleImageById};