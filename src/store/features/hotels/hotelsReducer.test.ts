import { apiHotelsMock } from "../../../mocks/apiHotelsMock";
import {
  deleteHotelActionCreator,
  hotelsReducer,
  loadHotelsActionCreator,
} from "./hotelsSlice";
import { HotelStateStructure } from "./types";

describe("Given a hotelsReducer reducer", () => {
  describe("When it receives an empty list of hotels and the action loadHotels", () => {
    test("Then it should return a list with the hotels 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", () => {
      const hotelList = apiHotelsMock;
      const currentHotelListState: HotelStateStructure = {
        hotels: [],
      };

      const newListState = hotelsReducer(
        currentHotelListState,
        loadHotelsActionCreator(hotelList),
      );

      expect(newListState.hotels).toStrictEqual(hotelList);
    });
  });

  describe("When it receives a list of hotels, a valid hotel id and the action deleteHotel", () => {
    test("Then it should return the list of hotels without the hotel 'Four Seasons Hotel George V'", () => {
      const initialState: HotelStateStructure = { hotels: apiHotelsMock };
      const expectedDeletedHotel = "Four Seasons Hotel George V";
      const expectedHotelId = "656492010f2c29b15944b0d8";

      const currentHotelsState = hotelsReducer(
        initialState,
        deleteHotelActionCreator(expectedHotelId),
      );

      currentHotelsState.hotels.forEach((hotel) =>
        expect(hotel).not.toHaveProperty("name", expectedDeletedHotel),
      );
    });
  });
});
