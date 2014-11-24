require 'minitest/assertions'

module Minitest::Assertions

  def assert_valid(attr_name, model)
    msg = "#{model.class} instance should be valid"
    assert model.valid?, msg
  end

  def assert_invalid(attr_name, model)
    msg = "#{model.class} instance should have validation errors for ##{attr_name}"
    is_invalid = (model.invalid?) && (model.errors[attr_name].size > 0)
    assert is_invalid, msg
  end
  
end

require 'minitest/spec'

module Minitest::Expectations
  infect_an_assertion :assert_valid, :must_be_valid
  infect_an_assertion :assert_invalid, :must_be_invalid
  
  infect_an_assertion :assert_redirected_to, :must_redirect_to
  infect_an_assertion :assert_template, :must_render_template
  infect_an_assertion :assert_response, :must_respond_with
end