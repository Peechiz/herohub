const app = require('express')();
const request = require('request')

app.get('/hero/:battletag', (req, res)=>{
    const player = req.params.battletag
    console.log('in there like swimwear')

    const hh = request.defaults({ headers: {'User-Agent': 'HeroHub'} })
    hh.get(`https://owapi.net/api/v3/u/${player}/blob`, (err, response, body)=>{
        if (err) console.log(err)
        console.log(response.statusCode)
        res.send(body)
    })
})

app.get('/test', (req,res)=>{
    console.log('blam')
    res.send('ok')
})

const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`The server is over ${port}...`)
})