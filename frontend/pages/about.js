
import styles from "@/styles/About.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function About(){
    return(
        <>
        <Head>
            <title>เกี่ยวกับเรา | SomChadaporn</title>
            <meta name="keywords" content="somchadaporn,ร้านค้ามขาย"></meta>
        </Head>
        <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/next.svg" width={500} height={500} alt="about"/>
      </div>
        </>
    )
}