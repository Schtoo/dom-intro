describe('calculate bill', function() {
  it('should give you the amount of a call entered', function() {
    assert.equal(calculateBtnClicked('call'), 2.75);
  });
  it("should give you the amount of an sms enetered", function() {
    assert.equal(calculateBtnClicked('sms'), 0.75);
  });
  it('should give you the total for both sms & call', function(){
    assert.equal(calculateBtnClicked('sms, call, sms, call'),7.00);
  });
});