enum MatchStatus {
    Unknow = 'Unknow', // 還沒配對過 資料近來的預設狀態
    Interest = 'Interest', // 喜歡對方 對方狀態改 Pending
    Favorite = 'Favorite', // 超級喜歡對方 => Success
    Uninterested = 'Uninterested', // 不喜歡對對方 => Fail（對方還是可以滑 但往後放）
    Pending  = 'Pending', // 被滑到 等待同意 => 往前放改成 Confirmed o Declined
    Confirmed = 'Confirmed', // 被滑到 已同意 => Success
    Declined = 'Declined', // 被滑到 已拒絕 => Fail
    Unmatch = 'Unmatch', // 配對過 解除配對 => Fail
}
// Q 05 sCCTODO: 有沒有其他的

export default MatchStatus;