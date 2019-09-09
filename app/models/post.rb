class Post < ApplicationRecord
  validates :user_id, :caption, :image_url, presence: true
  validate :ensure_photo

  belongs_to :user

  def ensure_photo
    errors[:photo].push("A photo is required.") unless self.photo.attached?
  end

end
