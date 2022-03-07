export function formatMoney(money) {
    try {
        return (money).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.0', '');
    } catch (err) { return 'Lỗi định dạng tiền'; }
};