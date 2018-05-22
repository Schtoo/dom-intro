describe('Settings Bill', function() {
  it('should give you the call total', function() {
    var settings = allBills();
    settings.CallCo(2.75);
    settings.SmsCo(0.00);
    settings.BothEqual(2.75);
    settings.criticalLevel(10.00);
    settings.warningLevels(5.00);

    settings.CallCo('call');

    assert.equal(settings.CallCo(), 2.75);
    asert.equal(settings.SmsCo(), 0.00);
    assert.equal(settings.BothEqual(), 2.75);
  });
  it('should return the sms total', function() {
    var total4Sms = allBills();
    total4Sms.CallCo(0.00);
    total4Sms.SmsCo(0.75);
    total4Sms.warningLevels(5.00);
    total4Sms.criticalLevel(10.00);
    total4Sms.BothEqual(0.75);

    total4Sms.SmsCo('sms');

    assert.equal(warning1stAmount.CallCo(), 0.00);
    assert.equal(warning1stAmount.SmsCo(), 0.75);
    assert.equal(warning1stAmount.BothEqual(), 0.75);
  })
  it("should return the total for sms's & calls", function() {
    var total4Both = allBills();
    total4Both.CallCo(2.75);
    total4Both.SmsCo(0.75);
    total4Both.BothEqual(3.50);
    total4Both.warningLevels(10.00);
    total4Both.criticalLevel(20.00);


    total4Both.SmsCo('sms');
    total4Both.CallCo('call');
    total4Both.CallCo('call');
    total4Both.SmsCo('sms');

    assert.equal(total4Sms.CallCo(), 2.75);
    assert.equal(total4Sms.CallCo(), 2.75);
    assert.equal(totial4Smst.SmsCo(), 0.75);
    assert.equal(totial4Smst.SmsCo(), 0.75);
    assert.equal(total4Sms.BothEqual(), 7.00);
  });
});