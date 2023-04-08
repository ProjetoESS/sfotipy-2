import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, protractor, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function goTo(page:string) {
    await browser.driver.get(`http://localhost:4200/${page}`);
}

let sameCategory = ((elem, category) => elem.element(by.css(".category")).getText().then(text => text == category));

defineSupportCode(function({Given, When, Then}) {

    Given(/^possuo login "([^\"]*)" e senha "(\d*)"$/,  async (login, senha) => {
        expect(login).to.equal(login);
    })

    Given(/^estou na página da playlist "([^\"]*)" com id "(\d*)"$/, async (playlistName, id) => {
        goTo("playlist/" + id);
        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 10000, "Element not visible");

        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);
    });

    Given(/^tenho permissão para gerenciar "([^\"]*)"$/, async(playlistName) => {
        // Teste para verificar permissão.
    });

    Given(/^"([^\"]*)" tem a categoria "([^\"]*)"$/, async (playlist, category) => {
        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(1);
    });

    When(/^seleciono a opção de adicionar uma nova categoria$/, async () => {
        const addNewCategoriy = await element(by.className("add_new_category"));
        await addNewCategoriy.click();
    });

    When(/^seleciono "([^\"]*)" como uma nova categoria$/, async (category) => {
        const categoryElement = await element(by.id("category-"+category));
        await categoryElement.click();
    });

    Then(/^"([^\"]*)" é uma nova categoria da playlist "([^\"]*)"$/, async (category, playlistName) => {
        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();

        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        expect(await playlist.getText()).to.equal(playlistName);
        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(1);
    });

    Given(/^possuo o login "([^\"]*)" e senha "([^\"]*)"$/, async (login, senha) => {
        // Verificar login
    });

    Given(/^"([^\"]*)" não é uma categoria da playlist "([^\"]*)t"$/, async (category, playlistName) => {
        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(0);
    });

    Given(/^"([^\"]*)" é uma categoria da playlist "([^\"]*)"$/, async (category, playlistName) => {
        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(1);
    });

    When(/^seleciono "([^\"]*)" para o remover das categorias$/, async (category) => {
        const removedElement = await element(by.id("selected-"+category));
        await removedElement.click();
    });

    Then(/^"([^\"]*)" é uma categoria de "([^\"]*)” e "([^\"]*)" não.$/, async (categoryPresent, playlistName, categoryNotPresent) => {
        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();
        expect((await element.all(by.id(`selected-${categoryPresent}`))).length).to.equal(1);
        expect((await element.all(by.id(`selected-${categoryNotPresent}`))).length).to.equal(0);
        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);

    });

    // Scenario : remover uma categoria.

    Then(/^"([^\"]*)" não possui mais "([^\"]*)" como uma categoria da playlist$/, async(playlistName, category) => {
        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();

        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);
        
        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(0);
    });

    // Scenario : adicionando categoria já existente na playlist

    Then(/^"([^\"]*)" continua tendo somente uma categoria, que é "([^\"]*)"$/, async(playlistName, category) => {
        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();

        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(1);
        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);
    });

    // Scenario: mais de duas categorias para playlist

    Then(/^"([^\"]*)" não é uma categoria de "([^\"]*)"$/, async (category, playlistName) => {

        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();

        expect((await element.all(by.id(`selected-${category}`))).length).to.equal(0);
        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);
    });

    // Scenario: removendo todas as categorias de uma playlist

    Then(/^"([^\"]*)" não possui nenhuma categoria$/, async (playlistName) => {
        const goBackToPlaylist = await element(by.css(".back"));
        await goBackToPlaylist.click();

        const EC = protractor.ExpectedConditions;
        const playlist = await element(by.css(".playlist_name"));
        await browser.wait(EC.visibilityOf(playlist), 5000, "Element not visible");
        const playlist_name = await playlist.getText();
        expect(playlist_name).to.equal(playlistName);
        expect((await element.all(by.className("category"))).length).to.equal(0);
    });

    // Scenario: adicionando duas categorias para a playlist

    Given(/^"([^\"]*)" não possui nenhuma categoria cadastrada$/,  async(playlistName) => {
        expect((await element.all(by.className("category"))).length).to.equal(0);
    });

    // Scenario: adicionando categoria na playlist não tenho permissão para gerenciá-la.

    
});
