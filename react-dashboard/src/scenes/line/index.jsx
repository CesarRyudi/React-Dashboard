import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";



const Line = () => {

    

    return (
      <div>
            <Box m="20px">
                <Header title="Line Chart" subtitle="Just a Line Chart" />
                <Box height="75vh">
                    <LineChart />
                </Box>
            </Box>
      </div>
    )

};
export default Line;







