import React, { useEffect, useState } from "react";
import InputField from "./Input";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../Redux/api/api";
import Button from "./Button";
import { useSelector } from "react-redux";
import imageUpload from "../../Utils/imageUpload";
import swal from "sweetalert";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { UpdateFired } from "../../Redux/feathcer/DashboardSlice";
const UpdateModal = () => {
  const inetialValue = {
    name: "",
    price: "",
    quantity: "",
    rating: "",
    description: "",
    brand: "",
    img: "",
  };

  const [formData, setFormData] = useState(inetialValue);

  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  const { UpdateProduct, updateing } = useSelector((e) => e.DashbpardStore);


  useEffect(() => {
    update(UpdateProduct);
  }, [UpdateProduct, updateing]);

  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // image upload handle.
  const imageUpdateUploadHandle = async (e) => {


    if (!e?.target?.files[0]) {
      return;
    }
    setIsUploading(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      setErrorMessage(null);

      update({ img: event.target.result });
    };
    reader.readAsDataURL(e.target.files[0]);

    // upload image.

    imageUpload(e.target.files[0])
      .then((details) => details.json())
      .then((res) => {
        update({ img: res.data.display_url });
        setIsUploading(false);
      })
      .catch(() => {
        isUploading(false);
        setErrorMessage(
          <span className="font-bold text-red-400">"Upload Failed!"</span>
        );
      });
  };

  const [
    updateRoom,
    { isLoading: roomLoading, data: roomData, error: roomError },
  ] = useUpdateProductMutation();

  // form submit handle.

  const dispatch = useAppDispatch();
  const formUpdateHandle = (e) => {
    e.preventDefault();

    if (isUploading && !formData.img) return;

    updateRoom({ ...formData });
  };

  useEffect(() => {
    dispatch(UpdateFired());
    if (roomData?.statusCode === 200) {
      setFormData(inetialValue);
      document.getElementById("my_modal_2")?.close();
      swal("Success", roomData.message, "success");
    } else if (roomError) {
      document.getElementById("my_modal_2")?.close();
      swal("Failed", roomError?.data?.message, "error");
    }
  }, [roomData, roomError]);
 
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box lg:max-w-[50vw] ">
        <form className="mb-4" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}
        <h1 className="font-semibold text-xl mb-4">Update A Product.</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <label
            className="lg:w-1/2 h-max cursor-pointer"
            htmlFor="product_image_update"
          >
            <div className="rounded-lg overflow-hidden w-full h-[200px] ">
              <div className="relative w-full h-full">
                {isUploading && (
                  <div className="to-center w-full h-full absolute bg-[#6d6d6dc9] flex-col text-white">
                    <span className="loading loading-ring loading-lg"></span>{" "}
                    {errorMessage || "Uploading"}
                  </div>
                )}
                <img
                  className="w-full h-full object-cover"
                  src={formData?.img}
                  alt=""
                />
              </div>
            </div>
          </label>
          <input
            className="hidden"
            accept="image/*"
            id="product_image_update"
            type="file"
            onInput={imageUpdateUploadHandle}
          />
          <form onSubmit={formUpdateHandle} className="lg:w-[50%] " action="">
            <div className="grid grid-cols-1 gap-3 gap- lg:grid-cols-2">
              <InputField
                type="text"
                altimeValue={formData.name}
                valueUpdate={(e) => update({ name: e.target.value })}
                placeholder="Product Name"
              />
              <InputField
                type="text"
                altimeValue={formData.brand}
                valueUpdate={(e) => update({ brand: e.target.value })}
                placeholder="Brand Name"
              />
              <InputField
                type="number"
                altimeValue={formData.price}
                valueUpdate={(e) => update({ price: parseInt(e.target.value) })}
                placeholder="Product Price"
              />
              <InputField
                type="number"
                altimeValue={formData.quantity}
                valueUpdate={(e) =>
                  update({ quantity: parseInt(e.target.value) })
                }
                placeholder="Product Quantity"
              />
              <InputField
                type="number"
                altimeValue={formData.rating}
                valueUpdate={(e) =>
                  update({ rating: parseInt(e.target.value) })
                }
                placeholder="Product Rating"
              />
            </div>
            <InputField
              type="textarea"
              altimeValue={formData.description}
              valueUpdate={(e) => update({ description: e.target.value })}
              placeholder="Product Description"
            />
            <div className="text-end">
              <Button disable={isUploading} text={"Update"} />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateModal;
