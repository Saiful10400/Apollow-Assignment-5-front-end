
import { useGetRoomsQuery } from "../../../Redux/api/api";
import Loading from "../../SharedComponent/Loading";
import RoomCart from "../../Ui/RoomCart";
import CenterAlign from "../../Helper/CenterAlign";

const Rooms = () => {
  const { data, isLoading } = useGetRoomsQuery(null);

  return (
    <CenterAlign>
      <div className="h-[200vh]">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-3 mt-4">
            {data?.data?.map((item) => {
              return <RoomCart key={item._id} data={item} />;
            })}
          </div>
        )}
      </div>
    </CenterAlign>
  );
};

export default Rooms;
