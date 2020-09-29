import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    '& > *': {
      height: 20,
      width: 20,
    },
  },
}));

const RelatedStyles = ({styles, selected}) => {
  const classes = useStyles();
  console.log('selected: ', selected)

  const ThumbnailRender = () => {
    if (styles.results !== undefined) {
      return (
        <div class="container">
          <div class="row">
            {styles.results.map((style) => (
              <div key="style.style_id" class="col-sm-3">
              <Badge
                badgeContent="✓"
                color="secondary"
                overlap="circle"
                invisible={!selected}>
              <Avatar
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                className={classes.small}/>
              </Badge>
              </div>
            ))}
          </div>
        </div>)
    } else {
      return (<div>Loading...</div>)
    }
  }

  return (
    <div>
      { ThumbnailRender() }
    </div>
  );
}

export default RelatedStyles;