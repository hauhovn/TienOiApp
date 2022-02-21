export function formatMoney(money) {
    return (money).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.0', '');
};