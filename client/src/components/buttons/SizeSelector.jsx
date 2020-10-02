import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const SelectSizeButton = ({ sizes, sizeSelector }) => {
  
  if (sizes.skus !== undefined) {
    const skuArray = Object.keys(sizes.skus);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index, sku) => {
      sizeSelector(sku);
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return ( 
      <div className={classes.root}>
      <List component="nav" aria-label="Size selector">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Select Size" secondary={skuArray[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {skuArray.map((sku, index) => (
          <MenuItem
            key={sku}
            disabled={null}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, sku)}
          >
            {sku}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
  } else {
    return (<div>Loading...</div>);
  };
};

export default SelectSizeButton;
