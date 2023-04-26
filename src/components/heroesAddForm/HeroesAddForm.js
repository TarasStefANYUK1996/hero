// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { add } from "../../actions";
const HeroesAddForm = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [filter, setFilter] = useState([]);
  const [user, setUser] = useState({
    name: "",
    text: "",
    element: "",
  });
  useEffect(() => {
    request("http://localhost:3001/filters/").then((res) => {
      setFilter(res);
    });
  }, [request]);
  let filt = filter.map((filter, index) => {
    return Object.entries(filter).map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ));
  });
  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={user["name"]}
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          value={user["text"]}
          placeholder="Что я умею?"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, text: e.target.value }));
            console.log(user);
          }}
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          value={user.element}
          required
          className="form-select"
          id="element"
          name="element"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, element: e.target.value }));
          }}
        >
          <option>Я владею элементом...</option>
          {filt}
        </select>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          request(
            "http://localhost:3001/heroes/",
            "POST",
            JSON.stringify(user)
          );
          dispatch(add(user));
          console.log(user);
        }}
        type="submit"
        className="btn btn-primary"
      >
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
