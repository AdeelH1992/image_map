// ImageMapperComponent.js
import React from 'react';
import ImageMapper from 'react-image-mapper';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const MAP = {
  name: "my-map",
  areas: [
    { name: "cabin area", shape: "poly", coords: [820,531,1018,534,1011,402,915,389,870,395,835,406,807,411] },
    { name: "arm", shape: "poly", coords: [523,158,615,175,810,492,520,227,520,197,797,496] }
  ]
};

const ImageMapperComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState("");
  const [dialogTitle, setDialogTitle] = React.useState("");

  const handleClick = (area) => {
    setInfo(`You clicked on ${area.name}`);
    setDialogTitle(area.name);
    setOpen(true);
  };

  return (
    <div>
      <ImageMapper
        src="https://poc-imagemap.netlify.app/kraan.jpeg"
        map={MAP}
        onClick={handleClick}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Typography>{info}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageMapperComponent;
