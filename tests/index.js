module.exports = {
  tags: ['ux31'],
  'Test in Funnel Ux31': function (client) {
    client
      .url('http://seguros.comparamejor.com/seguros-para-vehiculos/express/#/consultar-placa')
      .waitForElementPresent('body', 1000)
      .setValue('input[type=text]', ['xcv234', client.Keys.ENTER])
      .pause(7000)
      .click('.btn-success')
      .pause(1000)
      .click('.btn-icon-content:last-child')
      .pause(1000)
      .end();
  }
};
