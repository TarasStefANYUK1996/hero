// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useDispatch } from "react-redux";
import { heroesSort } from "../../actions";
import { useState } from "react";
import classNames from "classnames";

const HeroesFilters = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("btn-outline-dark");
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            // className="btn btn-outline-dark active"
            className={classNames("btn btn-outline-dark", {
              active: activeButton === "btn-outline-dark",
            })}
            onClick={() => {
              dispatch(heroesSort("All"));
              handleButtonClick(() => {
                handleButtonClick("btn-outline-dark");
              });
            }}
          >
            Все
          </button>
          <button
            // className="btn btn-danger"
            className={classNames("btn btn-danger", {
              active: activeButton === "btn-danger",
            })}
            onClick={() => {
              handleButtonClick(() => {
                handleButtonClick("btn-danger");
              });
              dispatch(heroesSort("fire"));
            }}
          >
            Огонь
          </button>
          <button
            // className="btn btn-primary"
            className={classNames("btn btn-primary", {
              active: activeButton === "btn-primary",
            })}
            onClick={() => {
              handleButtonClick(() => {
                handleButtonClick("btn-primary");
              });
              dispatch(heroesSort("water"));
            }}
          >
            Вода
          </button>
          <button
            // className="btn btn-success"
            className={classNames("btn btn-success", {
              active: activeButton === "btn-success",
            })}
            onClick={() => {
              handleButtonClick(() => {
                handleButtonClick("btn-success");
              });
              dispatch(heroesSort("wind"));
            }}
          >
            Ветер
          </button>
          <button
            // className="btn btn-secondary"
            className={classNames("btn btn-secondary", {
              active: activeButton === "btn-secondary",
            })}
            onClick={() => {
              handleButtonClick(() => {
                handleButtonClick("btn-secondary");
              });
              dispatch(heroesSort("earth"));
            }}
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
