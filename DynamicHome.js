import * as React from 'react'; 
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
// import Login from '../Login/Login';
const dressItems = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSC3HZJJFeXq6D5OxxucIzwr4nONbiaofwgw&s', price: 49.99 },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyFek12UPR1isHnWvua5cyljKcXYRBnELqw&s', price: 39.99 },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YvoerjzkSt_mV78Rc03TJCRRaAHw5feV0w&s', price: 59.99 },
  { image: 'https://m.media-amazon.com/images/I/31gDeu6Rj2L.AC_UY1100.jpg', price: 29.99 },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlOKZZKB0XUoeicLW8AN0gx-Lx3Sp8Dw51A&s', price: 45.99 },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWLxs8t-OYNWEYtYemkNu05qukH3-wPjtdw&s', price: 55.99 },
  { image: 'https://m.media-amazon.com/images/I/618ovUDv8TL.jpg', price: 35.99 },
  { image: 'https://m.media-amazon.com/images/I/41i3vcaJifL.AC_UY1100.jpg', price: 49.99 },
];


// const lnavigate = useNavigate();
// const handleLogin = () =>{
//     lnavigate("/")
// }

// const handleSignup = () =>{
//     lnavigate("/ho")
// }
const NAVIGATION = [
  { 
    segment: 'dashboard', 
    title: 'Dashboard', 
    icon: <DashboardIcon style={{ fontSize: '40px', color: '#fff' }} />, 
  },
  { 
    segment: '', 
    title: 'Orders', 
    icon: <ShoppingCartIcon style={{ fontSize: '40px', color: '#fff' }} />, 
  },
  { 
    segment: '/', 
    title: 'Login', 
    icon: <DashboardIcon  style={{ fontSize: '40px', color: '#fff' }} />, 
  },
  { 
    segment: 'sign up', 
    title: 'Sign Up', 
    icon: <DashboardIcon  style={{ fontSize: '40px', color: '#fff' }} />, 
  }
];

const demoTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DressItem({ item, onAddToCart, onFavorite, onCheckCostume }) {
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => onAddToCart({ ...item, quantity });
  const handleFavorite = () => onFavorite(item);

  return (
    <Box sx={{ 
        width: 390, 
        height: 650, 
        textAlign: 'center', 
        borderRadius: '20px', 
        p: 3, 
        backgroundColor: '#fff', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
          transform: 'scale(1.05)', 
        }
      }}>
      <img src={item.image} alt="Dress" style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '10px' }} />
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>${item.price.toFixed(2)}</Typography>

<TextField
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(Math.max(1, Math.min(99, e.target.value)))}
  variant="standard"
  size="medium"
  sx={{
    mt: 6,
    width: '80%',
    backgroundColor: 'lightgray', 
    '& .MuiInput-root': { color: 'blue' },
    '& .MuiInputBase-input': { color: 'black', fontSize: '1.5rem' , marginLeft: '150px'},
    borderRadius: '5px', 
    '& .MuiInputAdornment-root': {
      '& button': {
        fontSize: '1.5rem',
        width: '40px',
        height: '40px', 
      },
      '& svg': { 
        fontSize: '1.5rem',
        marginLeft: '150px'
      },
    },
  }}
/>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={handleAddToCart}
          sx={{ 
            transition: '0.3s', 
            '&:hover': { backgroundColor: '#1976d2', transform: 'scale(1.05)' }
          }}>
          Add to Cart
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleFavorite}
          sx={{ 
            transition: '0.3s', 
            '&:hover': { backgroundColor: '#f7d5f5', transform: 'scale(1.1)' }
          }}>
          <FavoriteIcon />
        </Button>
      </Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          mt: 2,
          borderRadius: '20px',
          fontColor : '#388e3c',
          padding: '10px 20px',
          backgroundColor: '#5a19d2',
          color:'white',
          fontWeight:'bold',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
          transition: '0.5s',
          '&:hover': { backgroundColor: '#333', transform: 'scale(1.05)' },
        }}
        onClick={() => navigate("/open")}
      >
        Check Your Style
      </Button>
    </Box>
  );
}

function DemoPageContent({ pathname, cartItems, onFavorite, onCheckCostume }) {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pathname === '/dashboard' ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 30 }}>
          {dressItems.map((item, index) => (
            <DressItem
              key={index}
              item={item}
              onAddToCart={() => {}}
              onFavorite={onFavorite}
              onCheckCostume={onCheckCostume}
            />
          ))}
        </Box>
      ) : pathname === '/orders' ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Your Orders</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            {cartItems.length === 0 ? (
              <Typography>No items in cart.</Typography>
            ) : (
              cartItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: 2, borderRadius: '8px' }}>
                  <img src={item.image} alt="Dress" style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                  <Typography>${item.price.toFixed(2)} x {item.quantity}</Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      ) : (
        <Typography onClick={{}}variant="h5">{pathname}</Typography>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onCheckCostume: PropTypes.func.isRequired,
};

function OriginalHome(props) {
  const [pathname, setPathname] = React.useState('/dashboard');
  const [cartItems] = React.useState([]);

  const navigate = useNavigate();


  const handleFavorite = (item) => {
    console.log('Added to favorite:', item);
  };


  return (
    <ThemeProvider theme={demoTheme}>
      <Box sx={{ display: 'flex' }}>
       
        <Box sx={{ width: 500, background: 'linear-gradient(135deg, #1976d2, #42a5f5)', padding: 3, height: '120vh' }}>
          <Typography variant="h4" color="white" sx={{ fontWeight: 'bold', mb: 6 }}>Virtual Designer</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {NAVIGATION.map((navItem, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => setPathname(`/${navItem.segment}`)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  color: 'white',
                  padding: 4,
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  transition: '0.3s',
                  backgroundColor: pathname === `/${navItem.segment}` ? '#42a5f5' : 'transparent',
                  '&:hover': { backgroundColor: '#90caf9', transform: 'scale(1.05)' },
                }}
              >
                {navItem.icon}
                <Typography variant="h6" sx={{ ml: 2 }}>{navItem.title}</Typography>
              </Button>
            ))}
          </Box>
        </Box>

      
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <DemoPageContent 
            pathname={pathname} 
            cartItems={cartItems} 
            onFavorite={handleFavorite} 
            onCheckCostume={() => navigate("/open")}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

OriginalHome.propTypes = {
  window: PropTypes.func,
};

export default OriginalHome;
