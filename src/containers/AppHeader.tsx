import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../components/AppHeader";
import { moviesRequest } from "../store/actions/movies";
import { RootState } from "../store/reducers";

const AppHeaderContainer: React.FC = () => {

  const dispatch = useDispatch();

  const isFetchingMovies = useSelector((state: RootState) => state.movies.loading);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);

  useEffect(() => {
    if(!currentPage) {
      dispatch(moviesRequest(1));
    }
  }, [currentPage, dispatch])

  const onChangeCurrentPage = (current: number) => {
    if(isFetchingMovies) return;
    dispatch(moviesRequest(current));
  }

  return <AppHeader 
    current={currentPage || 1}
    defaultCurrent={1}
    onChangeCurrentPage={onChangeCurrentPage}
  />;
};

export default AppHeaderContainer;