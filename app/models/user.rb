class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :bio, length: {maximum: 240}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :posts

  has_many :comments

  has_one_attached :profile_picture

  def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user && user.is_password?(password) ? user : nil
	end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64
		self.save!
		self.session_token
	end

end
