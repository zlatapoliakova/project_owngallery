import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/UI/button/Button";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";
import Input from "../components/UI/input/Input";
import ToggleableList from "../components/UI/list/ToggleableList";
import plus from "../img/plus.svg";

const AddPost = () => {
  const items = Array.from({ length: 10 }, (_, index) => `Lorem${index + 1}`);
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/main");
  };

  return (
    <div>
      <Header />
      <div className="add">
        <div className="add__block">
          <p>Drug or choice image</p>
          <div className="add__block__image">
            <img src={plus} alt="icon" />
          </div>
        </div>
        <div className="add__text">
          <div className="add__text__item">
            <p>Title</p>
            <Input className="input__enter" placeholder="Enter title" />
          </div>
          <div className="add__text__item">
            <p>Description</p>
            <Input className="input__descr" placeholder="Enter description" />
          </div>
          <div className="add__text__item">
            <p>Category</p>
            <div className="add__text__category">
              <ToggleableList items={items} />
              <Input className="input__enter__2" placeholder="Enter title" />
            </div>
          </div>
        </div>
      </div>
      <div className="add__btns">
        <Button variant="outline" onClick={handleMainClick}>
          Cancel
        </Button>
        <Button variant="default">Public image</Button>
      </div>
      <Footer />
    </div>
  );
};

export default AddPost;
