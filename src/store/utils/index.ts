import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppSelector } from "../types";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: AppSelector = useSelector;
