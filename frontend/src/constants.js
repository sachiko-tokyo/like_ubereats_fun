export const REQUEST_STATE = {　// APIリクエスト中に画面がいまどういう状態なのか？を知るための状態
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    OK: 'OK',
  }
  
  export const HTTP_STATUS_CODE = {
    NOT_ACCEPTABLE: 406,
  }

// APIリクエストに関して必要になる定数を定義

// 複数のコンポーネント、関数、モジュールから参照される値は別ファイルに定義しておく方が良さげ