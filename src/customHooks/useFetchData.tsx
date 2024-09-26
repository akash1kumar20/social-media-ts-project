import axios from "axios";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  firstName: string;
  lastName: string;
};

const useFetchData = (url: string) => {
  const [comingData, setComingData] = useState<Data[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  useEffect(() => {
    setIsloading(true);
    const fetchData = async () => {
      try {
        let res = await axios.get(url);
        let resArr = [];
        for (let key in res.data) {
          resArr.push({ ...res.data[key], id: key });
        }
        setComingData(resArr as Data[]);
        setIsloading(false);
      } catch (err) {
        alert("Something Wrong! Please Refresh");
        setIsloading(false);
      }
    };
    setInterval(() => {
      fetchData();
    }, 2000);
  }, [url]);
  return [comingData, isLoading];
};

export default useFetchData;
