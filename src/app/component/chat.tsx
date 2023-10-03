import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./chat.module.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ChatComponentProps {
  initialPhotos: { src: string }[];
  inputValue: string; 
}

const ChatComponent: React.FC<ChatComponentProps> = ({ initialPhotos, inputValue }) => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [count, setCount] = useState(0); 
  const [res, setRes] = useState(false);

  useEffect(() => {
    if (initialPhotos.length > 0) {
      setPhotos(initialPhotos);
    }
    setTimeout(() => {
      setCount(10); // Set the desired number (e.g., 10)
    }, 1000);
    setTimeout(() => {
      window.scrollBy(0, 60000000000);
    }, 1050);
    setTimeout(() => {
      setCount(47); // Set the desired number (e.g., 47)
    }, 4500);
    setTimeout(() => {
      window.scrollBy(0, 60000000000);
    }, 4550);
    setTimeout(() => {
      setCount(96); // Set the desired number (e.g., 96)
    }, 9000);
    setTimeout(() => {
      window.scrollBy(0, 60000000000);
    }, 9050);
    setTimeout(() => {
      setRes(true);
    }, 14000);
    setTimeout(() => {
      window.scrollBy(0, 60000000000);
    }, 14500);
  }, [initialPhotos]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    setOpen(false);
  };

  const renderCountText = () => {
    return !res && (
      <div className={styles.present}>
        <div className={styles.topcontnet}>
          AI-Studio
          <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
        </div>
        <div className={styles.contnet}>
          {count}%
        </div>
      </div>
    );
  };

  return (
    <div className={styles.chat}>
    
      {renderCountText()}
      {res && (
        <div className={styles.res}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.chatimage}>
              <div className={styles.topcontnet}>
                AI-Studio
                <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
              </div>
              <Image src={photo.src} alt="Chat image" width={100} height={100} className="img" />
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>הורדה באיכות גבוה</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    במידה ותרצו לקבל את התמונה באיכות גבוה הכנס כתובת מייל
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="דואר אלקטרוני"
                    type="email"
                    fullWidth
                    variant="standard"
                    required
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>ביטול</Button>
                  <Button onClick={handleSend}>אישור</Button>
                </DialogActions>
              </Dialog>
              <Button variant="outlined" className={styles.download} onClick={handleClickOpen}>
                להורדה
              </Button>
              <div className={styles.contnet}>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
