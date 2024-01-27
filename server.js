const fs = require("fs");

const allVersions = [
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/ambassador.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/brask.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/brya.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/clapper.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/coral.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/corsola.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/dedede.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/enguarde.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/glimmer.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/grunt.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/hana.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/hatch.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/jacuzzi.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/kukui.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/lulu.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/nami.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/octopus.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/orco.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/pyro.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/reks.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/sentry.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/stout.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/strongbad.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/tidus.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/ultima.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/volteer.zip",
    "https://dl.osu.bio/api/raw/?path=/SH1mmer/zork.zip",
];

allVersions.forEach(async (version) => {

    const filename = version.split("/SH1mmer/")[1];
    const site = version;

    console.log(filename);

    // fetch url
    const res = await fetch(site, {
        headers: {
            // some sites require a user-agent header to return the webpage
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
        },
    })
    
    const text = await res.text();

    fs.writeFile(__dirname + "public/" + filename, text, () => { console.log("Written " + filename) });
})

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, console.log("Serving on port 3000"));