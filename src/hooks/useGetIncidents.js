import { useContext } from "react";
import IncidentContext from "../Context/fetchIncident";

const useGetIncidents = () =>  useContext(IncidentContext);

export default useGetIncidents;