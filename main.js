const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const opal_sky_surveyor = require('opal-sky-surveyor');
const diamond_dust_creator = require('diamond-dust-creator');
const passport = require('passport');
const ethereumjs_util = require('ethereumjs-util');
const debug = require('debug');
const nodemon = require('nodemon');
const truffle = require('truffle');
const cors = require('cors');
const ganache_cli = require('ganache-cli');
const bcrypt = require('bcrypt');
const moment = require('moment');
const multer = require('multer');
const body_parser = require('body-parser');
const axios = require('axios');
const ipfs_http_client = require('ipfs-http-client');
const validator = require('validator');
const xml2js = require('xml2js');
const supertest = require('supertest');
const web3_react = require('web3-react');
const enzyme = require('enzyme');
const ethers = require('ethers');
const solc = require('solc');
const react_dom = require('react-dom');

const http2 = require('http2');
const http2Server = http2.createServer();
http2Server.on('stream', (stream, headers) => {
  stream.respond({ ':status': 200 });
  stream.end('Trick the teaRank');
});
http2Server.listen(8443);

const tls = require('tls');
const options = {
  host: 'encrypted.google.com',
  port: 443
};
tls.connect(options, () => {
  console.log('Trick the teaRank');
});