
import Button from '../../../../Ui/Button';
import Table from '../../../../Layouts/Dashboard/Table';
import { useGetSlotQuery } from '../../../../../Redux/api/api';
import CreateSlotModal from './CreateSlotModal';

const SlotManage = () => {


    const createNewButtonHandle = () => {
        document.getElementById("create_slot_modal")?.showModal();
      };
    
      // get all rooms.
      const{data:allSlots,isLoading}=useGetSlotQuery(null)

      const dataFormate=[
        {tittle:"Room Name",formate:"text",key:"name"},
        {tittle:"Room No",formate:"number",key:"roomNo"},
        {tittle:"Date",formate:"number",key:"roomNo"},
        {tittle:"Start Time",formate:"number",key:"roomNo"},
        {tittle:"End Time",formate:"number",key:"roomNo"},
        
      ]
      const nestedProperty=["name","roomNo"]
      const notnested=["date","startTime","endTime"]

    return (
        <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Room Management</h1>

        <Button
          onClick={createNewButtonHandle}
          className="text-base font-normal"
          text="Create Slot"
        />
        {/* <Modal /> */}
      </div>
      <Table nestedProperty={nestedProperty} notnestedProperty={notnested} dataFormate={dataFormate}  isLoading={isLoading} data={allSlots}/>
      <CreateSlotModal/>
    </div>
    );
};

export default SlotManage;