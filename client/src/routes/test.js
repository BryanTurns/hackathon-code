import { useParams, useSearchParams } from "react-router-dom";

const Tickets = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="h-screen">
      <p>test</p>
    </div>
  );
};
export default Tickets;
