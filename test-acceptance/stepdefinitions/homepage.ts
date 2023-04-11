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
    //Scenario: Visualizar informações para usuário não logado
    Given(/^eu esteja na página inicial "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    Given(/^eu tenha optado por não fazer login$/, async () => {
        // No action needed, as we are not logged in as default
    });

    When('eu percorro a página', async () => {
        // No action needed, as we are just navigating through the page
    });

    Then(/^eu consigo ver apenas as "([^\"]*)" e as "([^\"]*)"$/, async (em_alta, publicas) => {
        const pub = await element(by.name("plsts-publicas"));
        const ema = await element(by.name("plsts-em-alta"));
        expect(await pub.getText()).to.equal(publicas);
        expect(await ema.getText()).to.equal(em_alta);
    });

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Minhas Playlists de usuário não logado
    //Given eu esteja na página inicial "Sfotipy"
    //And eu tenha optado por não fazer login

    When(/^eu clico no botão "([^\"]*)"$/, async (button) => {
        await element(by.name(button.toString())).click();
    });

    Then(/^eu sou levado para a pagina de "([^\"]*)"$/, async (page) => {
        await browser.get("http://localhost:4200/" + ((page.toString()).toLowerCase().replace(" ", "_")));
        await expect(browser.getTitle()).to.eventually.equal(page.toString());
    });

    //Não fiz ainda
    //And aparece o botão de "Registrar" OU
    //And aparece o botão de "Continuar como convidado" OU
    //And aparece a mensagem "Você precisa estar logado para acessar playlists próprias"

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Voltar à página inicial
    Given(/^eu esteja na página "([^\"]*)"$/, async (page) => {
        await browser.get('http://localhost:4200/' + page.toString().toLowerCase());
        await expect(browser.getTitle()).to.eventually.equal(page.toString());
    });

    When(/^eu clico no botão "([^\"]*)" uma vez$/, async (home) => {
        await element(by.name(home.toString())).click();
    });

    Then(/^eu vou diretamente para a página inicial do serviço$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Sfotipy');
    });

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Visualizar informações públicas e do usuário
    //Given eu esteja na página inicial "Sfotipy"

    Given(/^eu esteja logado com o usuário "([^\"]*)" e a senha "([^\"]*)"$/, async (user, passw) => {
        await browser.get('http://localhost:4200/login');
        await element(by.name("email")).sendKeys(user.toString());
        await element(by.name("password")).sendKeys(passw.toString());
        await element(by.name("entrar")).click();
    });

    //When eu percorro a página

    Then(/^eu consigo ver "([^\"]*)", "([^\"]*)", "([^\"]*)" e as "([^\"]*)"$/, async (recomendacoes, publicas, em_alta, minhas) => {
        const rec = await element(by.name("recomendacoes"));
        const pub = await element(by.name("plsts-publicas"));
        const ema = await element(by.name("plsts-em-alta"));
        const min = await element(by.name("minhas-plsts"));
        expect(await rec.getText()).to.equal(recomendacoes);
        expect(await pub.getText()).to.equal(publicas);
        expect(await ema.getText()).to.equal(em_alta);
        expect(await min.getText()).to.equal(minhas);
    });

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Sair do serviço
    //Given eu esteja na página inicial "Sfotipy"
    //eu esteja logado com o usuário "vgc3" e a senha "abc1234"

    When(/^eu clico no ícone de "([^\"]*)" no "([^\"]*)"$/, async (sair, perfil) => {
        await element(by.name(perfil.toString())).click();
        await element(by.name(sair.toString())).click();
    });

    //Then eu sou levado para a pagina de "Login"

    Then(/^minhas credenciais serão pedidas novamente$/, async () => {

    });

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Acessar perfil do usuário
    //Given eu esteja na página inicial "Sfotipy"

    //And eu esteja logado com o usuário "vgc3" e a senha "abc1234"

    Given(/^eu esteja logado com o usuário usuário "([^\"]*)" e a senha "([^\"]*)"$/, async (user, passw) => {

    });

    //When eu clico no botão "perfil"

    Then(/^eu posso ver meu dados "([^\"]*)" e "([^\"]*)"$/, async (name, followers) => {
        await element(by.name("nome"));
        await element(by.name("seguidores"));
        //expect(await nm.getText()).to.eventually.equal('Olá,\n'+name);
        //expect(await fl.getText()).to.eventually.equal(followers);
    });

    //////////////////////////////////////////////////////////////////////////
    //Scenario: Minhas Playlists de usuário logado
    //Given eu esteja na página inicial "Sfotipy"

    //And eu esteja logado com o usuário "vgc3" e a senha "abc1234"

    Given(/^eu esteja logado com o usuário usuário "([^\"]*)" e a senha "([^\"]*)"$/, async (user, passw) => {

    });

    //When eu clico no botão "playlists"

    //Then eu sou levado para a pagina de "Minhas Playlists"

    Then(/^eu posso ver uma lista com as minhas playlists "([^\"]*)", "([^\"]*)" e "([^\"]*)"$/, async (playlist1, playlist2, playlist3) => {
        const pl1 = await element(by.name("nome"));
        const pl2 = await element(by.name("nome"));
        const pl3 = await element(by.name("nome"));
        expect(await pl1.getText()).to.equal(playlist1);
        expect(await pl2.getText()).to.equal(playlist2);
        expect(await pl3.getText()).to.equal(playlist3);
    });
});