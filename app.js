const express = require('express');
const app = express();
const session = require('express-session');

app.use(session(
    {
        secret: 'secret code',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: true,
            maxAge: 1000*60*60 //쿠키 유효 시간 1시간
        } 
    }));

    const server = app.listen(3000,() => {
        console.log('server started. port 3000...');
    });

    //DB 접속 정보
    const db = {
        database:'pigs_count',
        connectionLimit: 100,
        host:'127.0.0.1',
        user: 'opening',
        password: 'opening!12'
    };
    // db 접속 시작 
    const dbPool = require('mysql').createPool(db);
작
    app.post('/api/login', async(request, res) => {

    });

    app.post('/api/logout', async(request, res) => {

    });