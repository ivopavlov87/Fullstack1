class RemoveImageUrLsFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :image_url, :string
  end
end
