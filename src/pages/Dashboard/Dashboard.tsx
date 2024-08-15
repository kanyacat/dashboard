import { Layout } from "../../layout/Layout";
// import { News } from "../News/News";
import { WeatherPage } from "../Weather/WeatherPage/WeatherPage";

export const Dashboard = () => {
  return (
    <Layout>
      <WeatherPage />
      {/* <News /> */}
    </Layout>
  );
};
