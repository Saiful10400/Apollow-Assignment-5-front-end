import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../Redux/api/api";
import UpdateModal from "../../Ui/UpdateModal";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setProduct } from "../../../Redux/feathcer/DashboardSlice";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Loading from "../../SharedComponent/Loading";
const Table = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const dispatch = useAppDispatch();
  // update handle.
  const updateHandle = (data) => {
    dispatch(setProduct(data));
    document.getElementById("my_modal_2")?.showModal();
  };

  const [
    deleteProduct,
    { isLoading: roomLoading, data: productData, error: roomError },
  ] = useDeleteProductMutation();

  // deleting handle.
  const deleteHandle = (id) => {
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "No",
      denyButtonText: `Yes`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        deleteProduct({ _id: id });
      }
    });
  };

  useEffect(() => {
    if (productData) {
      if (productData.statusCode === 200) {
        Swal.fire("Product delete successfully!", "", "success");
      }
    }
  }, [productData]);

  return (
    <div data-aos="fade-up" className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-xl font-semibold">
            <th>S/N</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Brand</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="lg:text-base">
          {!isLoading &&
            data?.data.map((item, idx) => {
              return (
                <tr data-aos="fade-down"
                  key={item._id}
                  className={` ${
                    idx % 2 !== 0 ? "bg-[#ffffff]" : "bg-[#f5f0f09c]"
                  }`}
                >
                  <td className="font-semibold">{(idx += 1)}</td>
                  <td>
                    <div className="flex items-center justify-start gap-3">
                      <div className="">
                        <div className=" rounded-lg h-[60px] w-[80px]">
                          <img
                            className="w-full h-full rounded-lg object-cover"
                            src={item.img}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">$ {item.price}</td>
                  <td className="font-semibold">{item.brand}</td>
                  <td className="w-max flex mt-3 ">
                    <button
                      onClick={() => updateHandle(item)}
                      className="btn btn-success text-white btn-sm text-lg"
                    >
                      <LiaEditSolid />
                    </button>
                    <button
                      onClick={() => deleteHandle(item._id)}
                      className="btn btn-error text-white btn-sm text-lg ml-4"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {isLoading && <Loading />}
      {data?.data?.length === 0 && (
        <div className="to-center w-full text-lg mt-4">
          No Product Available!
        </div>
      )}
      <UpdateModal />
    </div>
  );
};

export default Table;
