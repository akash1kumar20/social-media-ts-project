import useFetchData from "../../customHooks/useFetchData";
type Data = {
  id: number;
  firstName: string;
  lastName: string;
};

const RightSideBar = () => {
  const [comingData, isLoading] = useFetchData("https://dummyjson.com/users");

  return (
    <div className="md:w-[20%] pt-4 ps-4">
      <h4 className="flex gap-x-2 items-center pb-4 border-b me-2">
        <img
          src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
          className="h-6 rounded-full"
        />
        <span className="text-lg">UserName</span>
      </h4>
      <div className="pt-2">
        <h5 className="font-serif">Suggested Friends</h5>
        {isLoading && <p>Please Wait...</p>}
        {comingData.map((data: Data) => (
          <div key={data.id}>
            <p>{data.firstName}</p>
            <p>{data.lastName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
