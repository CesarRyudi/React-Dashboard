import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";


import { addDays } from 'date-fns';
import { useState } from 'react';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 


const Line = () => {

    const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);

    return (
            <Box m="20px">
                <Header title="Line Chart" subtitle="Just a Line Chart" />
                <Box height="75vh">
                    <LineChart />
                </Box>
            </Box>
    )

};
export default Line;







