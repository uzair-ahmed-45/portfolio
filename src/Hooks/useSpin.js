import { useContext } from "react";
import { Spin } from "../Context/SpinContext";

const useSpin = () => {
    return useContext(Spin)
}
export default useSpin;