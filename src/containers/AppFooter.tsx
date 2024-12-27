import { useDispatch, useSelector } from "react-redux";
import AppFooter from "../components/AppFooter";
import { moviesRequest } from "../store/actions/movies";
import { RootState } from "../store/reducers";

const AppFooterContainer: React.FC = () => {

  const dispatch = useDispatch();

  const isFetchingMovies = useSelector((state: RootState) => state.movies.loading);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);

  const onChangeCurrentPage = (current: number) => {
    if(isFetchingMovies) return;
    dispatch(moviesRequest(current));
  }

  return <AppFooter 
    current={currentPage || 1}
    defaultCurrent={1}
    onChangeCurrentPage={onChangeCurrentPage}
  />;
};

export default AppFooterContainer;