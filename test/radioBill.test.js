describe('Radio function', function() {
  it("should give you the total of calls  made", function() {
    var callsDone = Bills();
    callsDone.Type('call');
    assert.equal(callsDone.CallSum(), 2.75);
  });
  it("should give you the total of sms's made", function() {
    var smsDone = Bills();
    smsDone.Type('sms');
    assert.equal(smsDone.SmsSum(), 0.75);
  });
  it("should give you the total for both calls & sms's", function() {
    var combined = Bills();
    combined.Type('sms');
    combined.Type('sms');
    combined.Type('sms');
    combined.Type('sms');
    combined.Type('sms');
    combined.Type('call');
    combined.Type('call');
    combined.Type('call');
    combined.Type('call');
    assert.equal(combined.TotalCalc(), 14.75);
  });
})