require 'test_helper'

class IdentityTest < ActiveSupport::TestCase

  setup do
    @identity = identities(:default)
  end

  test 'validates presence of #email' do
    @identity.email = nil
    assert_invalid :email, @identity
  end

  test 'validates format of #email' do
    invalid_formats = %w(not_an_email not_an_email@test)
    invalid_formats.each do |invalid_format|
      @identity.email = invalid_format
      assert_invalid :email, @identity
    end
  end

  test 'validates uniqueness of #email' do
    copycat = @identity.dup
    copycat.save
    assert_invalid :email, copycat
  end

end
