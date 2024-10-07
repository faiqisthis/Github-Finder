import { useContext} from "react";
import GithubContext from "../../context/GithubContext";
import Spinner from "../shared/Spinner";
import UserItem from "./UserItem";
function UsersList({}) {
  const { users,loading} = useContext(GithubContext);
  
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
