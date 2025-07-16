import { useEffect } from "react";

const CheckCmp = () => {
  useEffect(() => {
    console.log("check");
  }, []);

  return <div>Hello I am new check post component</div>;
};

export default CheckCmp;
