import { useGetNewsByCategoryQuery } from "../../redux/news/newsApi";

export const News = () => {
  const { data, error, isLoading } = useGetNewsByCategoryQuery({
    category: "general",
    size: 10,
  });

  console.log(data);

  return <div>News</div>;
};
