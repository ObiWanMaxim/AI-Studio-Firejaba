"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { TextareaAutosize } from '@mui/base';
import dotenv from 'dotenv';

import { Imagine } from "../request";
import { MJMessage } from "firejaba-mj";
import { Message } from "../interfaces/message";
import { Button } from '@mui/material';

const UserInputComponent = ({ inputValue }: { inputValue: string }) => (
  <div className={styles.req}>
    <div className={styles.topcontnet}>
      <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
      את/ה
    </div>
    <div className={styles.contnet}>
      {inputValue}
    </div>
  </div>
);

const ProgressComponent = ({ progress }: { progress: string }) => (
  <div className={styles.present}>
        <div className={styles.topcontnet}>
          AI-Studio
          <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
        </div>
        <div className={styles.contnet}>
          {progress}
        </div>
      </div>);

const ResComponent = ({ image }: { image: string }) => {
  const downloadImage = () => {

  };
  return (
  <div className={styles.res}>
    <div className={styles.chatimage}>
      <div className={styles.topcontnet}>
        AI-Studio
        <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
      </div>
      <Image src={image} alt="Chat image" width={1000} height={1000} className="img" />
      <Button variant="outlined" className={styles.download} onClick={downloadImage}>
        להורדה
      </Button>

    </div>
  </div>
  );
};


export default function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const [chatComponents, setChatComponents] = useState<JSX.Element[]>([]);
  const submitButtonRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [imgProgress, setImgProgress] = useState('');
  const [imgUrl, setImgUrl] = useState("");


  useEffect(() => {
    if(imgProgress === "done"){
    setChatComponents((prevChatComponents) => [
      ...prevChatComponents,
      <ResComponent image={imgUrl} />,
    ]);
    }

  }, [imgProgress]);

  dotenv.config();

  const updateProgressComponent = (progress: any, uniqueKey: string) => {
    setChatComponents((prevChatComponents) => {
      if (progress === "done") {
        const updatedComponents = prevChatComponents.filter((component) => {
          if (React.isValidElement(component)) {
            const componentKey = (component as React.ReactElement).key;
            return componentKey !== uniqueKey;
          }
          return true;
        });
        return updatedComponents;
      } else {
        const updatedComponents = prevChatComponents.filter((component) => {
          if (React.isValidElement(component)) {
            const componentKey = (component as React.ReactElement).key;
            return componentKey !== uniqueKey;
          }
          return true;
        });
        return [...updatedComponents, <ProgressComponent key={uniqueKey} progress={progress} />];
      }
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatComponents([...chatComponents, <UserInputComponent inputValue={inputValue} />]);
    setIsLoading(true);

    let newMessage: Message = {
      prompt: inputValue.trim(),
      progress: "0%",
      img: "",
    };
    setInputValue("");

  //  updateProgressComponent(newMessage.progress, 'unique-progress-key');

    if (newMessage.prompt) {
      const oldMessages = messages;
      console.log("oldMessages", oldMessages);
      setMessages([...oldMessages, newMessage]);


        await Imagine(
          JSON.stringify({ prompt: newMessage.prompt }),
          (data: MJMessage) => {
            console.log("progress", data.progress);

            newMessage.img = data.uri;
            newMessage.msgHash = data.hash;
            newMessage.msgID = data.id;
            newMessage.progress = data.progress;
            newMessage.content = data.content;
            newMessage.flags = data.flags;
            newMessage.options = data.options;
            setMessages([...oldMessages, newMessage]);
            setImgUrl(data.uri || "");
            setImgProgress(data.progress || "0%");
          }

        );
        console.log("IMAGE !!!", newMessage.img);

      // Add UserInputComponent

//       await Imagine(
//         JSON.stringify({ prompt: newMessage.prompt }),
//         (data: MJMessage) => {

//           console.log("progress", JSON.stringify( data));
//                 //    if (data.progress != null){
//       //      if (data.progress === "done") {
//       //        updateProgressComponent("done", 'unique-progress-key');
// //
//       //      } else {
//        //       updateProgressComponent(data.progress, 'unique-progress-key');
//       //      }
//        //   }
//           newMessage.img = data.uri;
//           newMessage.msgHash = data.hash;
//           newMessage.msgID = data.id;
//           newMessage.progress = data.progress;
//           newMessage.content = data.content;
//           newMessage.flags = data.flags;
//           newMessage.options = data.options;

//           setMessages([...oldMessages, newMessage]);
//         }
//       );
      // setChatComponents((prevChatComponents) => [...prevChatComponents, <ResComponent image={newMessage.img} />]);
      // setIsLoading(false);
      console.log("end")

    // } catch(e){
    //   console.log(e)
    // }
    }
  }



  useEffect(() => {
    window.scrollBy(0, 60000000000);
  }, [chatComponents, messages]);

  const handleClickOpen = () => {
  };

  return (
    <div className={styles.home}>
      <div className={styles.fullbg}></div>
      <div className={styles.chatres}>
        <div className={styles.hello}>
          <div className={styles.topcontnet}>
            AI-Studio
            <Image src="/assets/icon.png" alt="Chat image" width={15} height={15} className={styles.icon} />
          </div>
          <div className={styles.contnet}>ברוכים הבאים לסטודיו AI החכם של חברת Wivo</div>
        </div>
        {chatComponents.map((component, index) => (
          <div key={index} className={styles.chatcomponent}>
            {component}
          </div>
        ))}
      </div>
      <form className={styles.bar} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="submit"
            value={isLoading ? 'טוען' : 'שלח'}
            className={styles.submit}
            disabled={isLoading}
            ref={submitButtonRef}
          />
          <TextareaAutosize
            minRows={1}
            maxRows={2}
            className={styles.input}
            placeholder="כלב רובוטי עם חליפה..."
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
