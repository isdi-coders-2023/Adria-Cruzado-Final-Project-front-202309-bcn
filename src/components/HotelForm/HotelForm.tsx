import { useState } from "react";
import { HotelWithoutId } from "../../store/features/hotels/types";
import Button from "../Button/Button";
import HotelFormStyled from "./HotelFormStyled";

const HotelForm = (): React.ReactElement => {
  const emptyHotel: HotelWithoutId = {
    name: "",
    country: "",
    city: "",
    picture: "",
    price: 0,
    rating: 0,
    description: "",
    isFavourite: false,
  };

  const [newHotel, setNewHotel] = useState<HotelWithoutId>(emptyHotel);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewHotel({
      ...newHotel,
      [event.target.id]:
        event.target.type !== "checkbox"
          ? (event.target as HTMLInputElement).value
          : (event.target as HTMLInputElement).checked,
    });
  };

  return (
    <HotelFormStyled className="form" autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="hotel-name">
          Hotel name:
        </label>
        <input
          className="form__input"
          type="text"
          id="hotel-name"
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="country">
          Country:
        </label>
        <input
          className="form__input"
          type="text"
          id="country"
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="city">
          City:
        </label>
        <input
          className="form__input"
          type="text"
          id="city"
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="rating">
          Rating (from 0 to 10):
        </label>
        <input
          className="form__input"
          type="number"
          id="rating"
          min={0}
          max={10}
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price (€):
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture URL:
        </label>
        <input
          className="form__input"
          type="url"
          id="picture"
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="form__input"
          id="description"
          rows={10}
          cols={30}
          required
          onChange={onChangeData}
        />
      </div>
      <div className="form__row--checkbox">
        <label className="form__label--checkbox" htmlFor="checkbox">
          Favourite:
        </label>
        <input
          className="form__input--checkbox"
          type="checkbox"
          id="checkbox"
          required
          onChange={onChangeData}
        />
      </div>
      <Button text="add hotel" />
    </HotelFormStyled>
  );
};

export default HotelForm;