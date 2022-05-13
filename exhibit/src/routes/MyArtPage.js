import Auth from "../hoc/auth";
import LoginNavigationBar from "../components/Navbar/LoginNavigationBar";
import "./page.css"

function MyArtPage() {
  return (
    <div class="page">
      <LoginNavigationBar />
      <div class = "page"
        style={{
          background:"#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 class = "title">내가 올린 작품</h1>
      </div>
    </div>
  );
}

export default Auth(MyArtPage, true);
