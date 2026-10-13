import Page from "./Page";
import { WeatherProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
