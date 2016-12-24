var express = require('express'),
    querystring = require('querystring'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    title=[{title:'登陆'},{title:'注册'},{title:'欢迎'}],
    users=[];
app.set('view engine','ejs');
app.set('views',path.resolve('views'));
app.use(bodyParser.urlencoded({extended:true}));
//注册
app.get('/signup',function (req, res) {
    //res.sendFile(path.resolve('./views/signup.ejs'));
    res.render('signup',{title:title[1]})
});
app.post('/add',function (req, res) {
        users.push(req.body);
        res.redirect('/signin');
});

app.get('/signin',function (req, res) {
    res.render('signin',{title:title[0]})
});
app.post('/login',function (req, res) {
    var flag = users.find(function (item) {

        return item.name == req.body.name && item.password == req.body.password
    });
    if(flag){
        res.redirect('/welcome');
    }else{
        res.redirect('/signin');
    }
});
app.get('/welcome',function (req, res) {
    res.render('welcome',{title:title[2]})
});

app.listen(8080);