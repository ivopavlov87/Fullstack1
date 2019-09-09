class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.string :caption, :maximum => 500, null: false
      

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
