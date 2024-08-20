import profilePic from "./assets/profile-pic.jpg";

export default function Card() {
  return (
    <div className="card">
      <img src={profilePic} className="card-img" alt="profile pic"></img>
      <h2 className="card-title">Chloe Grahams</h2>
      <p className="card-text">UX Designer</p>
    </div>
  );
}
