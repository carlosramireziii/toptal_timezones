class AddTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :token, :string

    User.reset_column_information

    reversible do |dir|
      dir.up do

        # In order to add the not null constraint we (1) need to add the column (2) populate all rows with data for that column then (3) add the constraint
        # see: http://strd6.com/2009/04/adding-a-non-null-column-with-no-default-value-in-a-rails-migration/
        say 'Adding token to existing users...'
        User.find_each do |t|
          t.generate_token(:token)
          t.save!
        end
        change_column :users, :token, :string, null: false

      end
    end

    add_index :users, :token, unique: true
  end
end
