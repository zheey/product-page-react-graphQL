export function formatAmount(amount) {
    if (amount) {
        return Number(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return amount;
    }
}