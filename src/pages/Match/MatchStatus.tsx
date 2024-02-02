enum MatchStatus {
    Unknown = 'Unknown', // 還沒配對過 資料進來的預設狀態
    Interested = 'Interested', // 喜歡對方 => 對方往前放
    Favorite = 'Favorite', // 超級喜歡對方 => Success
    Uninterested = 'Uninterested', // 不喜歡對對方 => Fail（對方還是可以滑 但往後放）
    Unmatch = 'Unmatch', // 配對過 解除配對 => Fail
}

export default MatchStatus;