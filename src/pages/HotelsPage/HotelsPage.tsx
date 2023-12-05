import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HotelsPageStyled from "./HotelsPageStyled";
import { loadHotelsActionCreator } from "../../store/features/hotels/hotelsSlice";
import HotelsList from "../../components/HotelsList/HotelsList";
import useHotelsApi from "../../hooks/useHotelsApi";

const HotelsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getHotels } = useHotelsApi();

  useEffect(() => {
    (async () => {
      const hotels = await getHotels();
      dispatch(loadHotelsActionCreator(hotels.hotels));
    })();
  }, [dispatch, getHotels]);

  return (
    <HotelsPageStyled>
      <h1 className="page-title">Your visited hotels:</h1>
      <HotelsList />
    </HotelsPageStyled>
  );
};

export default HotelsPage;
