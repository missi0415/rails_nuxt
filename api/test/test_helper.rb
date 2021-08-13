ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'


# gem 'minitest-reporters' setup
require "minitest/reporters"
Minitest::Reporters.use!
# ここまで
class ActiveSupport::TestCase
# プロセスが分岐した直後に呼び出し
parallelize_setup do |worker|
  load "#{Rails.root}/db/seeds.rb"
end

parallelize(workers: :number_of_processors)

  # 追加
  def active_user
    User.find_by(activated: true)
  end

end
