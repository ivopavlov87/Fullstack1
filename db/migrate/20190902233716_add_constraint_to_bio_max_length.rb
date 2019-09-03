class AddConstraintToBioMaxLength < ActiveRecord::Migration[5.2]
  def change 
    change_column :users, :bio, :string, :limit => 240

  end
end
