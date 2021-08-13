class User < ApplicationRecord

  # validates
  validates :name, presence: true,
  length: { maximum: 30, allow_blank: true }

  # 追加
  VALID_PASSWORD_REGEX = /\A[\w\-]+\z/
  validates :password, presence: true,
                        length: { minimum: 8 },
                        format: {
                          with: VALID_PASSWORD_REGEX,
                          message: :invalid_password
                        },
                        allow_nil: true
end
