Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # users
      resources :users, only:[] do
        get :current_user, action: :show,on: :collection
        # on collection ルートにidを必要としない場合に使用するオプション
        # 通常、showアクションはuser_idを必要とします。
        # => /api/v1/users/:user_id/current_user
        # このオプションをつけると、パスのuser_idが不要となります。
        # => /api/v1/users/current_user 
      end
      # login, logout
      resources :user_token, only: [:create] do
        delete :destroy, on: :collection
      end
    end
  end
end
