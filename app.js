
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
let request = require('request')
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let dbo
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  dbo = db.db("mydb");
  dbo.createCollection("customers4", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
});
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.set('view engine', 'ejs');
app.listen(process.env.binPORT || 8083, function() {});
 let KEY = ''
 let KEY2 = ''
 let script = ''
 let email = ''
 let SECRET = ''
 let SECRET2 = ''
    let binApiKey = 'XGjzcjFqDgd06qg6fNpjAIUzzebrbURXup3Z7P1OCXBoq8SoFvnYV0pgCoN69gbG',
    binApiSecret = 'yZ1oFZFGkJjn3CPK9XsRkuJXQJzKohZPhhv6Jz5GmcsAN1cOVevEWeSLJPBNzlYM'
let ex;
let url2;
let maxBuyBtc = "0.05"
let targetBid = "0.0000400000"
let percentToBuy = "1.001"
let theonebase =  ""
let theoneasset =  ""
let bpSetting = "1.0005",
    spSetting = "0.9995",
    hourlyMult = "64",
    minProfit = "1.0079",
    targetSpread = "0.7",
    targetVolDiv = "10",
    targetVolMult = "20000",
    maxOrder = "4000",
    maxBetterVol = "1.5",
    stoploss = "0.88",
    neversellatalossReductionIntervalMinutes = "10",
    btcstart = "0.0018875010993860003",
    usdstart = "8.92308594730334",
    altstart = "0.47517776028044917"
    var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://techvoices.club',
  consumerKey: 'ck_74cbe1acfe710e06a22c2f116dcf4c24a1d1f7f5',
  consumerSecret: 'cs_1f3789366846fb131b8ecaff7521fe2d04191be9',
  wpAPI: true,
  version: 'wc/v1'
});


  const {google} = require('googleapis');
var compute2 = google.compute('v1');

app.post('/login', (request, res) => {
let name = request.body.name
    let pass = request.body.pass
 dbo.collection("customers4").find({user_id: name}).toArray(function(err, result) {
  if (err){
    res.json({"err": "nobody by that username"})
  }
      console.log(result)
      console.log(result.length)
      if (result.length > 0){
        if (result[0].pass == pass){
          res.json({'success': name})
        }
        else {
          res.json({"err": "incorrect password"})
        }
      }else {
        res.json({"err": "nobody by that username"})
      }
      
      })
  })
app.post('/register', (request, res) => {
let name = request.body.name
    let pass = request.body.pass1
    let ref = request.body.ref
    console.log(name)
    dbo.collection("customers4").find({user_id: name}).toArray(function(err, result) {
      console.log(result)
      console.log(result.length)
      if (result.length > 0){

        res.json({"err": "Someone with that username exists."})
      }
      else {
     dbo.collection("customers4").update({user_id: name}, {ref:ref, pass: pass, names: [], ips: [], user_id: name, credits: 0},{upsert: true}, function(err, resul) {
       
                res.json({"success": "You have successfully registered. You may now log in."})
 })
}
      })
 
    })



app.post('/delete', (request, res) => {
  	let name = request.body.name
  	let user_id = request.body.current_user_id
  	  dbo.collection("customers4").find({user_id: user_id}).toArray(function(err, result) {
let i = 0;
for (var name2 in result[0].names){
  if (result[0].names[name2] == name){
    result[0].names.splice(i, 1);
    result[0].ips.splice(i, 1);
  }
  i++;
}dbo.collection("customers4").updateMany({user_id: user_id}, {$set:{ref:result[0].ref, pass: result[0].pass,names:result[0].names,user_id: user_id, ips:result[0].ips,credits: result[0].credits}},{upsert: true}, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
})
})
  authorize(function(authClient) {
  var request = {
    project: 'coindex-ai-v0',
    zone: 'europe-west2-c',
    // Name of the instance resource to delete.
    instance: name,  // TODO: Update placeholder value.

    auth: authClient,
  };
  compute2.instances.delete(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
    res.redirect('http://34.83.217.103/main/template/manage.html')
  });
});

function authorize(callback) {
  google.auth.getApplicationDefault(function(err, authClient) {
    if (err) {
      console.error('authentication failed: ', err);
      return;
    }
    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
      authClient = authClient.createScoped(scopes);
    }
    callback(authClient);
  });
}


})
async function checkTx(credits, current_user_id){

dbo.collection("customers4").findOne({user_id: current_user_id}, function(err, result2) {
if (result2){

 dbo.collection("customers4").update({user_id: current_user_id},    {  "$set": {names: result2.names, credits: result2.credits + credits, ips: result2.ips, current_user_id: result2.user_id}},{upsert: true}, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  
  })


  }

})
}
app.get('/getavailbots', (request, res) => {
//to-do: add more bots, from db
let bots = []
bots.push({name: "Coindex MM",
  description: "This is Coindex MM",
  script: 'market_maker.py',
  settings:{
  script: 'market_maker.py',
  trial: false,
    email:'',
    KEY:"",

SECRET:"",
    KEY2:"",

SECRET2:""

  }})

res.json({bots})
})

app.post('/orders', (request, res) => {
	current_user_id = request.body.current_user_id
  console.log(current_user_id)
  let credits = parseFloat(request.body.credits)/1133     
  console.log(credits)
  setTimeout(function(){
checkTx(credits, current_user_id)
  }, 10000)

console.log(current_user_id)

})
app.get('/', (req, res) => {
    //*
    try {
dbo.collection("customers4").findOne({user_id: req.query.current_user_id}, function(err, result2) {
if (result2){
    res.json({names: result2.names, credits: result2.credits, ips: result2.ips, current_user_id: result2.user_id})
}
else {
  dbo.collection("customers4").find({}).toArray(function(err, result) {
    let answer = {}
    for (var r in result){
        result[r].pass = "haha u think ur smart";
answer[result[r].user_id] = result[r]
    }
  
  res.json(answer)
})
}
    })
}

catch(err){console.log(err)}
})
app.post('/', (req, res) => {
  let request = req;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
KEY = request.body.KEY
KEY2 = request.body.KEY2
script = request.body.script
trial = request.body.trial
initial_balance = request.body.initial_balance
email = request.body.email
SECRET = request.body.SECRET
SECRET2 = request.body.SECRET2
    dbo.collection("customers4").findOne({user_id: request.body.current_user_id}, function(err, result2) {
	if (result2){
	if (result2.credits >= 0){
	createVMWithStartupScript(request.body.email.toLowerCase().split(".").join("").split("_").join("").split("@")[0] + Math.floor(Math.random() * 1000000), request.body.current_user_id)
	}
	}
    res.redirect('http://34.83.217.103/main/template/manage.html')

    })
})

const Compute = require('@google-cloud/compute');
const fetch = require('node-fetch');

const compute = new Compute();
const zone = compute.zone('europe-west2-c');

/**
 * Create a new virtual machine with Ubuntu and Apache
 * @param {string} name Name of the virtual machine
 */
async function createVMWithStartupScript(name, userid) {
  // Create a new VM, using default ubuntu image. The startup script
  // installs apache and a custom homepage.
    const config = {
    os: 'ubuntu',
        'machineType': "zones/europe-west2-c/machineTypes/e2-standard-2" ,
    http: true,
    metadata: {
      items: [
        {
          key: 'startup-script',
          value: `#! /bin/bash
            # Installs apache and a custom homepage
            sudo -E su
            apt-get update
            apt-get install -y git wget gzip build-essential ntpdate python3-pip python3 python3-dev
            curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
            sudo bash nodesource_setup.sh
            sudo apt-get install nodejs -y

            sudo rm -r deribitMarketMaker
            git clone https://jare1:-FikS4gi3MVz7K8UxiHP@gitlab.com/CoindexLabs/deribitMarketMaker.git
      		ab=$(dig @resolver1.opendns.com ANY myip.opendns.com +short)
            export theurl="$ab"

            export KEY="`+KEY+`"
            export SECRET="`+SECRET+`"
            export initial_balance="`+initial_balance+`"
            export KEY2="`+KEY2+`"
            export SECRET2="`+SECRET2+`"
            export trial="`+trial+`"
        set rlim_fd_max = 166384
set rlim_fd_cur = 8192
sudo echo '* hard nofile 650000' >> /etc/security/limits.conf

 ulimit -n 650000
		    
		    cd deribitMarketMaker
		    git checkout ryan-stable
		    npm i ccxt express cors ejs request body-parser ws
		    nohup node bal.js &
		    pip3 install quantstats flask ccxt finta deribit_api requests pandas
        sudo ntpdate time.nist.gov
	      nohup python3 "`+script+`" &
        sudo chmod +x run_production.sh
        nohup ./run_production.sh &
	      `,
        },
      ],
    },
  };
console.log(config)
  const vm = zone.vm(name);

  console.log(`Creating VM ${name}...`);
  const [, operation] = await vm.create(config);

  console.log(`Polling operation ${operation.id}...`);
  await operation.promise();

  console.log('Acquiring VM metadata...');
  const [metadata] = await vm.getMetadata();

  // External IP of the VM.
  const ip = metadata.networkInterfaces[0].accessConfigs[0].natIP;
 
 
  dbo.collection("customers4").find({user_id: userid}).toArray(function(err, result) {
    if (result[0].ips != undefined){
    i = result[0].ips
    }
    else {
      i = []
    }
    i.push(ip)
    if (result[0].names != undefined){
    n = result[0].names
    }
    else {
      n = []
    }
    if (!n.includes(name)){
    n.push(name)
    }
    if (!i.includes(ip)){
    i.push(ip)
    }
    
  dbo.collection("customers4").update({user_id: userid}, {$set:{ref:result[0].ref, pass: result[0].pass,names: n, user_id: userid, credits: 1,ips: i}},{upsert: true}, function(err, res) {//result[0].credits,ips: i}},{upsert: true}, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  })
  
  })
  console.log(`Booting new VM with IP http://${ip}...`);

  // Ping the VM to determine when the HTTP server is ready.
  console.log('Operation complete. Waiting for IP');
  await pingVM(ip);

  console.log(`\n${name} created succesfully`);
}

/**
 * Poll a given IP address until it returns a result.
 * @param {string} ip IP address to poll
 */
 setTimeout(function(){
countUpTime()
}, 2000)
  setInterval(function(){
countUpTime()
}, 60000)
async function countUpTime() {
    dbo.collection("customers4").find({}).toArray(async function(err, result) {
    if (err) throw err;
    for (var r in result){
      let credits = result[r].credits
      let ips = result[r].ips
  let user_id = result[r].user_id
  if (user_id != undefined){
  let exit = false;
    for (var ip in ips){
    doCheck(ips[ip], user_id)
      }
    }
  }
    
  });
}
async function doCheck(ip, user_id){
  console.log(ip)
  try {
        console.log(user_id)
  dbo.collection("customers4").find({user_id: user_id}).toArray(function(err, result) {
    let cs = result[0].credits - 0.00002314814
        dbo.collection("customers4").updateMany({user_id: user_id}, {$set:{ref: result[0].ref, pass: result[0].pass,names:result[0].names,user_id: user_id, ips:result[0].ips,credits: cs}},{upsert: true}, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
        })
  })
    } catch (err) {
      console.log(err)
    }
}
async function pingVM(ip) {
  let exit = false;
  while (!exit) {
    await new Promise(r => setTimeout(r, 2000));
    try {
      const res = await fetch(`http://${ip}`);
      if (res.status !== 200) {
        throw new Error(res.status);
      }
      exit = true;
    } catch (err) {
      process.stdout.write('.');
    }
  }
}

const args = process.argv.slice(2);
