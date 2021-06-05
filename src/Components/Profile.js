import Victor from "../images/image-victor.jpg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="top"></div>
      <div className="bottom">
        <img src={Victor} alt="" />
        <h2>
          Viktor Savic <span>27</span>
        </h2>
        <small>Aleksandrovac</small>
      </div>
    </div>
  );
};

export default Profile;
