import AppHeader from "./containers/AppHeader";
import MovieList from "./containers/MovieList";
import AppFooter from "./containers/AppFooter";

function App() {

  return (
    <div className="App">
      <AppHeader />
      <MovieList />
      <AppFooter/>
    </div>
  );
}

export default App;
