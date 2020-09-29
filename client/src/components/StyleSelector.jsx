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

const RelatedStyles = ({relatedStyles, selected, selectedStyleHandler}) => {
  const classes = useStyles();
  
  const ThumbnailRender = () => {
    if (relatedStyles !== undefined) {
      return (
        <div class="container">
          <div class="row">
            {relatedStyles.map((style) => (
              <div key="style.style_id" class="col-sm-3">
              <Badge
                badgeContent="✓"
                color="secondary"
                overlap="circle"
                invisible={!selected}>
              <Avatar
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                className={classes.small}
                onClick={() => selectedStyleHandler(style)}/>
              </Badge>
              </div>
            ))}
          </div>
        </div>)
    } else {
      return (<div>Loading...</div>)
    };
  };

  return (
    <div>
      { ThumbnailRender() }
    </div>
  );
};

export default RelatedStyles;