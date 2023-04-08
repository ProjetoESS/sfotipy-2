import {defineSupportCode} from 'cucumber';
import {$, browser, by, element, ElementArrayFinder} from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import clipboard from 'clipboardy';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function assertTamanhoEqual(set, n) {
  await set.then(
      elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
}

async function assertIncludesInName(set, name) {
  expect(Promise.resolve(set.getText())).to.eventually.includes(name);
}

async function getPlaylistCardByName(name) {
  const playlistCard = await element.all(by.name('playlist-card'))
                           .filter(
                               p => p.element(by.css('.card-title'))
                                        .getText()
                                        .then(text => text === name))
                           .first();
  return playlistCard;
}

let sameName =
    ((elem, name) =>
         elem.element(by.name('nome'))
             .getText()
             .then(text => text.toLowerCase() === name.toLowerCase()));

let hasInName = (elem, name) =>
    elem.element(by.name('nome'))
        .getText()
        .then(text => text.toLowerCase().includes(name.toLowerCase()));

async function assertMusicsWithSameName(n, name) {
  var allmusics: ElementArrayFinder = element.all(by.name('nome'));
  var samenames = allmusics.filter(elem => sameName(elem, name));
  await assertTamanhoEqual(samenames, n);
}

defineSupportCode(function({Given, When, Then}) {
  Given(/^I'm on the page "([^\"]*)"$/, async (name) => {
    await browser.get('http://localhost:4200/explorar');
    await expect(browser.getTitle()).to.eventually.equal('Explorar');
  });

  Given(/^a playlist "([^\"]*)" appears as recommended$/, async (name) => {
    const allplaylists: ElementArrayFinder = element.all(by.name('nome'));
    const playlist =
        await allplaylists.filter(p => p.getText().then(text => text === name));
    expect(await playlist.length).to.equal(1);
  })

  When(/^I try to enter the playlist page "([^\"]*)"$/, async (name) => {
    const allplaylists = element.all(by.name('nome'));
    const playlist =
        await allplaylists.filter(p => p.getText().then(text => text === name))
            .first();
    await browser.executeScript(
        'arguments[0].click()', playlist.getWebElement());
  })

  When(
      /^I try to see the options of the playlist "([^\"]*)"$/, async (name) => {
        const playlistCard = await getPlaylistCardByName(name);
        const optionsIcon = playlistCard.element(by.name('options-button'));
        await browser.actions().mouseMove(optionsIcon).perform();
      })

  When(/^I try to share the playlist "([^\"]*)"$/, async (name) => {
    const playlistCard = await getPlaylistCardByName(name);
    const optionsIcon = playlistCard.element(by.name('options-button'));
    const shareIcon = playlistCard.element(by.name('Share'));
    await browser.actions().mouseMove(optionsIcon).perform();
    await browser.actions().mouseMove(shareIcon).perform();
    await browser.executeScript(
      'arguments[0].click()', shareIcon.getWebElement());
  })

  Then(/^I'm on the playlist page "([^\"]*)"$/, async (name) => {
    const playlistname = element.all(by.name('playlist-name'));
    const names = await playlistname.getText();
    expect(names).to.include(name);
  })

  Then(
      /^I see next to the playlist "([^\"]*)" the options "([^\"]*)", "([^\"]*)", "([^\"]*)"$/,
      async (name, op1, op2, op3) => {
        const playlistCard = await getPlaylistCardByName(name);
        const options = await playlistCard.all(by.css('.option'))
        const optionsmapped = await Promise.all(
            options.map(option => option.getAttribute('name')));
        const expectedOptions = [op1, op2, op3];

        for (const option of expectedOptions) {
          expect(optionsmapped).to.include(option);
        }
      });

  Then(
      /^the system shows a confirmation message that the link to the playlist "([^\"]*)" has been copied$/,
      async (name) => {
        const playlistCard = await getPlaylistCardByName(name);
        const confirmationMessage = await playlistCard.element(by.name('share-message'));
        expect(await confirmationMessage.isDisplayed()).to.be.true;
      });
})