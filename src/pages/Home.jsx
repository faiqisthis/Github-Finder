import UserSearch from "../components/users/UserSearch";
import UsersList from "../components/users/UsersList";
import Alert from "../components/layout/Alert";
UserSearch
function Home() {
  return (
    <div>
      <Alert/>
      <UserSearch />
      <UsersList />
    </div>
  );
}

export default Home;
