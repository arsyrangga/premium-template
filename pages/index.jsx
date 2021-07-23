import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import Table from "../components/table/TableArtikel";
import dynamic from "next/dynamic";
import "../styles/artikel.css";
import { useState, useRef, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";

useEffect;

export default function Home() {
  const [data, setData] = useState({
    img: "",
    editor: "",
  });

  //function convert gambar menjadi base64
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handlePhotoInput = (e) => {
    let { file } = data;
    file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setData({ ...data, img: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          {popUp && (
            <ArtikelPopUp
              onUpload={handlePhotoInput}
              onclose={() => setPopUp(false)}
              imgData={data.img}
            />
          )}
          <div class="main-panel">
            <Table onAddArtikel={() => setPopUp(true)} />
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

const ArtikelPopUp = ({ onclose, onUpload, imgData }) => {
  const [data, setData] = useState("");
  return (
    <>
      <div className="artikel-popup">
        <div className="artikel-form">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Tambah Content</h4>
            <i
              className="fas fa-times text-danger pointer"
              onClick={onclose}
            ></i>
          </div>
          <div className="artikel-input-container">
            <p>Judul content</p>
            <input type="text" />
          </div>
          <div className="artikel-input-container">
            <p>Foto</p>
            <label htmlFor="upload" className="bg-danger">
              Upload Foto
              <input type="file" id="upload" hidden onChange={onUpload} />
            </label>
          </div>
          <div className="artikel-image-form">
            <img src={imgData} alt="" />
          </div>
          <div className="artikel-input-container">
            <p>Video URL</p>
            <input type="text" />
          </div>
          <div className="artikel-input-container">
            <p>Deskripsi singkat</p>
            <textarea></textarea>
          </div>
          <div className="artikel-input-container">
            <p>Deskripsi Lengkap</p>
            <CKEditor
              data={data}
              style={{
                width: "100%",
              }}
              onChange={(evt) => {
                setData(evt.editor.getData());
              }}
            />
          </div>
          <div className="artikel-input-container">
            <p>Hubungkan dengan produk</p>
            <select>
              <option value="">pilih</option>
              <option value="demo">produk demo</option>
              <option value="murah">kopi murah</option>
            </select>
          </div>{" "}
          <div className="artikel-input-container">
            <p>Tampilkan di halaman depan</p>
            <select>
              <option value="">pilih</option>
              <option value="ya">ya</option>
              <option value="tidak">tidak</option>
            </select>
          </div>
          <div className="w-100 d-flex justify-content-end mt1">
            <button className="btn btn-danger" onClick={onclose}>
              Close
            </button>
            <button className="btn btn-primary ml-2">Simpan Content</button>
          </div>
        </div>
      </div>
    </>
  );
};
