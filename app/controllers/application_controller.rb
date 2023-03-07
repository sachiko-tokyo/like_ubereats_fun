class ApplicationController < ActionController::API
    before_action :fake_load # 全てのAPI controllerの処理のbefore_action

  def fake_load
    sleep(1) # 1sだけ実行止める
  end
end
