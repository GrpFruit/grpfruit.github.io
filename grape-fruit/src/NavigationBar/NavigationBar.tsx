import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';

const settings = [
  {
    text: "Profile",
    path: "/profile",
  },
  {
    text: "Account",
    path: "/account",
  },
  {
    text: "Dashboard",
    path: "/dashboard",
  },
  {
    text: "Logout",
    path: "/logout",
  }
];

const menuItems = [
  {
    text: "About Us",
    path: "/about-me",
  },
  {
    text: "Location",
    path: "/location",
  },
  {
    text: "Shop",
    path: "/shop",
  },
  {
    text: "Online Order",
    path: "/online-order",
  },
  {
    text: "Catering",
    path: "/catering",
  },
  {
    text: "Gift Card",
    path: "/gift-card",
  },
  {
    text: "Love Letter",
    path: "/love-letter",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Montserrat',
      "& .MuiContainer-root": {
        justifyContent: 'center',
        maxWidth: '969px'
      },
      "& .MuiToolbar-root": {
        // minWidth: '969px',
        minHeight: '40px'
      }

    },
  }),
);

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, height: '36px' }}>
          <Avatar alt="Remy Sharp" src="Remy.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((item) => (
          <MenuItem key={item.text} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
};

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className={classes.root} position="static" style={{ background: '#FDE2DE', font: 'rgb(149, 116, 61)' }}>
      <Container maxWidth={'xl'} sx={{ display: 'grid', gridTemplateColumns: '1fr' }} >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            justifyContent: 'center',
            margin: '8px 0px -35px 0px'
          }}
        >
          <img src="TE'AMO LOGO.png" style={{ width: '150px', height: '77px' }} onClick={() => navigate("/home")} />
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, justifyContent: 'flex-end' }}>
          <UserMenu />
        </Box>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{ color: 'rgb(149, 116, 61)', display: 'block', font: 'normal normal 520 14.5px/40px Montserrat', letterSpacing: '0px', padding: '0px 10px' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.text} onClick={() => navigate(item.path)}>
                  <Typography textAlign="center" >{item.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="TE'AMO LOGO.png" style={{ width: '150px', height: '77px', margin: '8px 0px' }} onClick={() => navigate("/home")} />
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0, justifyContent: 'flex-end' }}>
            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}