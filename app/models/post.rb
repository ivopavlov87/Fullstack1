class Post < ApplicationRecord
  validates :user_id, :caption, presence: true
  validate :ensure_photo

  belongs_to :user

  has_one_attached :photo

  def ensure_photo
    errors[:photo].push("A photo is required.") unless self.photo.attached?
  end

end
