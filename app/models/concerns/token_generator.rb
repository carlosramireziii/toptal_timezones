module TokenGenerator
  extend ActiveSupport::Concern

  def generate_token(column)
    begin
      self[column] = SecureRandom.hex
    end while self.class.exists?(column => self[column])
  end

end
