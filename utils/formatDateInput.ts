export const formatDateInput = (input: string) => {
    if (!input) {
        return input;
    }

    const date = input.replace(/[^\d]/g, '');

    if (date.length < 3) {
        return date;
    }

    if (date.length < 5) {
        return `${date.slice(0, 2)}.${date.slice(2)}`;
    }

    return `${date.slice(0, 2)}.${date.slice(2, 4)}.${date.slice(4, 8)}`;
}