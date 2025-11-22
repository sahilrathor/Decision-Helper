const formatToIST = (dateString: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    // Convert to IST
    return date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

export default formatToIST;