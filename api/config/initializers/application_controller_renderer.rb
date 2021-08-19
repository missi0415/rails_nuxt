class ApplicationController < ActionController::API
  # 追加
  include ActionController::Cookies
  include UserAuth::Authenticator
end
