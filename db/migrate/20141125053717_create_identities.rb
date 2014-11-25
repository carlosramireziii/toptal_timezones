class CreateIdentities < ActiveRecord::Migration
  def change
    create_table :identities do |t|
      t.string :email, null: false
      t.string :password_digest

      t.timestamps null: false
    end
    add_index :identities, :email, unique: true
  end
end
