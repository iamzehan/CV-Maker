import Educations from "./Education";
import Personal from "./personal";
import Jobs from "./Jobs";
import { Data } from "../../lib/utils";
export default function Form({
  data,
  setData,
  setNotification
}: {
  data: Data;
  setData: (data:Data) => void;
  setNotification: (notification:string) => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <Personal data={data} setData={setData}/>
        <Educations data={data} setData={setData} setNotification={setNotification}/>
        <Jobs data={data} setData={setData} setNotification={setNotification}/>
        <div className="flex w-full md:justify-end">
          {/* <input
            type="submit"
            value="Submit"
            className="btn-primary border-0! rounded-full px-3 py-3 w-full md:w-fit md:text-xl"
          /> */}
        </div>
    </div>
  );
}
