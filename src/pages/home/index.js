import { Box, IconButton, Typography } from '@mui/material';
import background from '../../images/background.png'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
function Home() {
    return (

        <Box
            sx={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                width: "100%",
                height: "100vh",
                display: 'flex',
                justifyContent: 'center',

            }}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',

                }}>
                <Box
                    sx={{
                        height: '25%'
                    }}>
                </Box>
                <Box >
                    <Typography
                sx={{       fontStyle:'italic',
                            fontFamily:'sans-serif',
                            fontSize: '100px',
                            color: 'white',
                            fontWeight:'bold'
                        }}>Spotter</Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <IconButton sx={{
                        color:'white',
                        
                    }}>
                    <PlayCircleOutlineIcon sx={{fontSize:'70px'}}/>
                    </IconButton>
                </Box>

                <Box >
                    <Typography sx={{ textAlign: 'center' ,fontStyle:'italic', fontFamily:'sans-serif',color:'white'}}>
                        By Marcelo Ferreira dos Santos
                    </Typography>
                </Box>

            </Box>

        </Box>


    )
}
export default Home