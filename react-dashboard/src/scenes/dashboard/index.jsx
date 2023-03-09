import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/MockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import LineChart from "../../components/LineChart"; 
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
    <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="welcome to your dashboard" />
                

            <Box>
                <Button
                  sx={{ background: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding:"10px 20px" }}>
                  <DownloadOutlinedIcon sx={{ mr: "10px"}} />
                  Download Reports
                </Button>
            </Box>
        </Box>

            {/* Grid and charts  */}
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mt="8px"
            >
                {/* ROW 1
                <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <StatBox 
                    title="12,123"
                    subtitle="Emails sent"
                    progress="0.75"
                    increase="14%"
                    icon={
                        <EmailIcon 
                        sx={{ color: colors.greenAccent[600], fontSiize: "26px" }}/>
                    }
                    />

                </Box>

                <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <StatBox 
                    title="123,22"
                    subtitle="Sales Obtained"
                    progress="0.5"
                    increase="21%"
                    icon={
                        <PointOfSaleIcon
                        sx={{ color: colors.greenAccent[600], fontSiize: "26px" }}/>
                        }
                    />
                </Box>


                <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <StatBox 
                    title="434,54"
                    subtitle="New Clients"
                    progress="0.3"
                    increase="35%"
                    icon={
                        <PersonAddIcon 
                        sx={{ color: colors.greenAccent[600], fontSiize: "26px" }}/>
                    }
                    />
                </Box>

                <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <StatBox 
                    title="65453"
                    subtitle="Traffic Inbouund"
                    progress="0.8"
                    increase="43%"
                    icon={
                        <TrafficIcon 
                        sx={{ color: colors.greenAccent[600], fontSiize: "26px" }}/>
                    }
                    />
                </Box> */}

                {/* ROW 2 */}
                <Box
                gridColumn="span 7"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Revenue generate    
                            </Typography>

                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                            $59,342,32.56
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon 
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
            </Box>    
            {/* Pie Chart */}
             <Box
                gridColumn="span 5"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Box>
                            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                            Pie chart example   
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon 
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height="250px" mt="-20px">
                        <PieChart isDashboard={true} />
                    </Box>
            </Box>
            {/* Transactiions  */}
            <Box 
            gridColumn="span 12"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            overflow="auto"
            >
                <Box 
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight={600} >
                        Recent Transactions 
                    </Typography>
                </Box>
                {mockTransactions.map(( transaction, i) => (
                    <Box 
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Box>
                            <Typography 
                            color={colors.greenAccent[500]} 
                            variant="h5" 
                            fontWeight={600} 
                            >
                            {transaction.txId}  
                            </Typography>

                            <Typography 
                            color={colors.greenAccent[500]} 
                            variant="h5" 
                            fontWeight={600} 
                            >
                            {transaction.user}  
                            </Typography>
                        </Box>

                            <Box color={colors.grey[100]}>
                                {transaction.date}
                                </Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            > 
                            ${transaction.cost}

                            </Box>

                    </Box>

                ))}
            </Box>

        </Box>
    </Box>

)};

export default Dashboard;