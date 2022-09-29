import "./App.css";
import Gallery from "./components/Gallery";
import { useState } from "react";
const IMAGE = [
  {
    name: "monkey D luffy",
    src: "https://img2.thuthuatphanmem.vn/uploads/2018/12/21/anh-nen-onepiece-de-thuong_035401019.jpg",
  },
  {
    name: "zoro",
    src: "https://haycafe.vn/wp-content/uploads/2022/03/Anh-Zoro-hinh-nen-Zoro.jpg",
  },
  {
    name: "nami",
    src: "https://wallpaperaccess.com/full/1635152.jpg",
  },
  {
    name: "sanji",
    src: "http://static-1.ivoox.com/audios/5/5/b/f/55bf10772d2fd46de262c2e11b7b6a69.jpg",
  },
  {
    name: "tony tony chopper",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb25e9b6-9a51-4021-9332-ce5ba139f5aa/d77pbqc-d5d8b159-49a8-42e3-b13a-d5adfa455ed1.jpg/v1/fill/w_1024,h_576,q_75,strp/tony_chopper_wallpaper____one_piece_by_kingwallpaper_d77pbqc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvY2IyNWU5YjYtOWE1MS00MDIxLTkzMzItY2U1YmExMzlmNWFhXC9kNzdwYnFjLWQ1ZDhiMTU5LTQ5YTgtNDJlMy1iMTNhLWQ1YWRmYTQ1NWVkMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7q0kVFm-S5bj1ls0NnwMsJhkCPB4Zr8ZcfWR3KuYULo",
  },
  {
    name: "nico robin",
    src: "https://hosonhanvat.vn/wp-content/uploads/2020/03/Robin-6-450x300.png",
  },
  {
    name: "franky",
    src: "https://i1.sndcdn.com/artworks-9zSGGgHGZme21QzC-MEShkA-t500x500.jpg",
  },
  {
    name: "brook",
    src: "https://thuvienanime.com/wp-content/uploads/2022/09/Brook.jpg",
  },
  {
    name: "jinbe",
    src: "https://i1.sndcdn.com/artworks-KhIj2uc0Db7Z2azn-zB8NHw-t500x500.jpg",
  },
];
function App() {
  document.title = "One Piece";
  return (
    <div className="App">
      <Gallery data={IMAGE} />
    </div>
  );
}

export default App;
