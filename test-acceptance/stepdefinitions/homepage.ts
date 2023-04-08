import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function assertTamanhoEqual(set, n) {
    await set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
}

async function assertIncludesInName(set, name) {
    expect(Promise.resolve(set.getText())).to.eventually.includes(name);
}

let sameName = ((elem, name) => elem.element(by.name('nome')).getText().then(text => text.toLowerCase() === name.toLowerCase()));

let hasInName = (elem, name) => elem.element(by.name('nome')).getText().then(text => text.toLowerCase().includes(name.toLowerCase()));

async function assertMusicsWithSameName(n, name) {
    var allmusics: ElementArrayFinder = element.all(by.name("music-container"));
    var samenames = allmusics.filter(elem => sameName(elem, name));
    await assertTamanhoEqual(samenames, n);
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/busca");
        await expect(browser.getTitle()).to.eventually.equal('Sfotipy');
    })

    Given('tenha optado por não fazer login (entrado como guest)', function () {
        // Log in as a guest user
    });

    When('eu percorro a página', function () {
        // Navigate through the page
    });

    Then('eu consigo ver apenas as “musicas em alta” e as “playlists públicas”', function () {
        const musicasEmAlta = element(by.css('.musicas-em-alta'));
        const playlistsPublicas = element(by.css('.playlists-publicas'));
      
        expect(musicasEmAlta.isPresent()).to.be.true;
        expect(playlistsPublicas.isPresent()).to.be.true;
    });
});