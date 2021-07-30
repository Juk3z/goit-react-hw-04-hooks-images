import { useState, useEffect, useCallback } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal";

import fetchImages from "./Services/PixabayAPI";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [images, setImages] = useState([]);
  const [modalImageURL, setModalImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const getItemsForGallery = useCallback(() => {
    setLoader(true);
    fetchImages(searchQuery, pageNumber)
      .then((responce) => {
        if (responce.length === 0) {
          setError("empty responce");
        }
        setImages((prev) => [...prev, ...responce]);
      })
      .catch(setError)
      .finally(setLoader(false));
  }, [searchQuery, pageNumber]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getItemsForGallery();
  }, [searchQuery, getItemsForGallery]);

  const openImage = (id) => {
    setModalShow(!modalShow);
    const clickImage = images.filter((item) => item.id === Number(id));
    setModalImageUrl(clickImage[0].largeImageURL);
  };

  const getSearchQuery = (query) => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setPageNumber(1);
    setError("");
  };

  return (
    <>
      <Searchbar onSubmit={getSearchQuery} />
      <ImageGallery>
        {images.map((item) => (
          <ImageGalleryItem
            key={item.id}
            id={item.id}
            url={item.webformatURL}
            openImage={openImage}
          ></ImageGalleryItem>
        ))}
      </ImageGallery>

      {error && (
        <p>oops... something went wrong, try again later or change query</p>
      )}

      {loader && <Loader />}

      {images.length > 0 && !loader && (
        <Button
          onClick={() => setPageNumber((prev) => prev + 1)}
          text={"load more"}
          totalElements={images.length}
        />
      )}

      {modalShow && (
        <Modal
          url={modalImageURL}
          modalToggle={() => setModalShow(!modalShow)}
        />
      )}
    </>
  );
}

export default App;
