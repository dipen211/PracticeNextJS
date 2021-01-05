import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import Head from 'next/head'
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    debugger;
    fetch('http://localhost:5000/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then((res) => {
      if (res.ok) {
        router.replace('/posts')
      }
      else {
        router.replace('/')
      }
    })
  }, [])

  // useEffect(() => {
  //   router.prefetch('/posts')
  // }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box>
        <TextField
          variant="outlined"
          margin="none"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary">
          Login
        </Button>
      </Box>

      {/* <div className={styles.loginForm}>
        <form onSubmit={handleSubmit} method="post">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a>
          </div>
        </form>
        <p className="text-center"><a href="#">Create an Account</a></p>
      </div> */}
    </>
  )
}