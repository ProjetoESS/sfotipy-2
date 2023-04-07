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

let sameName = ((elem, name) => elem.element(by.name('nome')).getText().then(text => text.toLowerCase() === name.toLowerCase()));

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

    Given(/^as músicas "([^\"]*)", "([^\"]*)", "([^\"]*)" e "([^\"]*)" aparecem na lista de músicas$/,
        async (music1, music2, music3, music4) => {
            await assertMusicsWithSameName(1, music1);
            await assertMusicsWithSameName(1, music2);
            await assertMusicsWithSameName(1, music3);
            await assertMusicsWithSameName(1, music4);
        });

    When(/^eu preencher o campo de busca por texto com "([^\"]*)"$/,
        async (name) => {
            await element(by.id("text-search-input")).clear();
            await element(by.id("text-search-input")).sendKeys(<string>name);
        })

    Then(/^eu posso ver as músicas "([^\"]*)" e "([^\"]*)" na lista de músicas$/,
        async (music1, music2) => {
            expect((await element.all(by.id(`music-${music1}`))).length).to.equal(1);
            expect((await element.all(by.id(`music-${music2}`))).length).to.equal(1);
        })

    Then(/^todas as músicas da lista de músicas contém "([^\"]*)" em seu nome$/,
        async (name) => {
            await element.all(by.css('.name')).then(items => {
                for (let index = 0; index < items.length; index++) {
                    const element = items[index];
                    expect(Promise.resolve(items[index].getText())).to.eventually.includes(name)
                }
            });
        })


})