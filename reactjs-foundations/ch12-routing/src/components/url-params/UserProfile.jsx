import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function UserProfile() {
  let {id} = useParams();

  return (
    <div>
      <h3>User ID: {id}</h3>
    </div>
  );
}

export default UserProfile;