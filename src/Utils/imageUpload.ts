import swal from "sweetalert";

const imageUpload = async(data) => {
  const image = new FormData();
  image.append("image", data);

  return fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_SECRET}`, {
    method: "POST",
    body: image,
  })
    
};

export default imageUpload;
