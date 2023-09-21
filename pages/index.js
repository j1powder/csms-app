import { useContext, useEffect } from 'react';
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import { AuthContext } from '@/hooks/AuthContext';

import classes from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    !currentUser ? router.push('/')
    : router.push('/dashboard')
  },[])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main} >
        <Container className={classes.maincontainer}>
        <h1>Contractor Safety Management System</h1>
        </Container>
      </main>
    </>
  )
}
