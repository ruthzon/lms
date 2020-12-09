import swal from 'sweetalert';

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
async function handleIconById(e, func,id) {
  let file = e.target.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    if (file.size / 1024 / 1024 > 2) alert('File size exceeds 2 MB');
    else {
      console.log(reader.result);
      func({
        id: id,
        key: 'icon',
        value: reader.result,
      });
    }
  };
}

const handleDelete = (funcDelete, data) => {
  // let name=data.currentTarget.__reactEventHandlers$dr5mwtbhix.name;
  // console.log("name"+name);
  swal({
    title: 'Are you sure?',
    text: 'Once deleted, you can not restore the data!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      funcDelete(data);
      swal('The file has been deleted successfully!', {
        icon: 'success',
      });
    } else {
      swal('Your data still safe!');
    }
  });
};
export{handleImage,handleImageById,handleDelete,handleIconById};