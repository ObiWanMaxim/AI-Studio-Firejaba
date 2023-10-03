"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

//mui
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function History() {

  return (
    <div className={styles.history}>

      <div className={styles.content}>
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />{" "}
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />{" "}
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />{" "}
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
        <Image
          className={styles.himg}
          width={200}
          height={200}
          alt="background"
          src="https://res.cloudinary.com/decne4dss/image/upload/v1694080049/full_1_3_1_1_v3hht6.jpg"
        />
      </div>
    </div>
  );
}
