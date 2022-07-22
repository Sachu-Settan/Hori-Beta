/*
 * You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
 * Licenced Under MIT License
 * Copyright © 2022 Sachu. Hori Mwol-MD
 */
const axios = require('axios')
const cheerio = require('cheerio')

const covid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/country/indonesia/`) 
const $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
kasus = $(a).find('div > span').eq(0).text()
kematian = $(a).find('div > span').eq(1).text() 
sembuh = $(a).find('div > span').eq(2).text() 
hasil.push({ kasus, kematian, sembuh}) 
return hasil
}


module.exports = { covid }