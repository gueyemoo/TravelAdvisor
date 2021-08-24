import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px', border:'1px solid black',
    },
    mapContainer: {
        height: '90vh', width: '100%', padding:'3vh'
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }, 
    },
    pointer: {
        cursor: 'pointer',
    },
}));