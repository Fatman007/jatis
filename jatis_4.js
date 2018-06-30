var mysql = require("mysql");
var express = require('express');
var app = express();

var date = new Date();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
var url = bodyParser.urlencoded({ extended: false })

var connection = mysql.createConnection
(
    {
        host: "127.0.0.1",
        port: 3307,
        database: "jatis_4",
        user: "root",
        password: "usbw",
    }
);

class Voucher {
    constructor() {
      this.listVoucher = []
    }
    generate() { 
      let l = this.listVoucher.length
      this.listVoucher.push({
        id: l === 0 ? 0 : this.listVoucher[l - 1].id + 1,
        redeem: false
      })
    }
    redeem(id) {
      this.listVoucher = this.listVoucher.map(el => el.redeem === false && el.id === id ? { ...el, redeem: true } : el)
    }
  }
  
  let v = new Voucher
  
  v.generate()
  v.generate()
  v.generate()
  v.generate()
  
  v.redeem(1)
  v.redeem(3)
  console.log(v.listVoucher[0])