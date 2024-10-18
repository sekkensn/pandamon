document.addEventListener('DOMContentLoaded', () => {
    const top10List = document.getElementById('top10-list');
    const avgList = document.getElementById('avg-list');

    // Mock data for demonstration purposes
    const files = [
        { name: 'top_10_file1.svg', size: '2KB' },
        { name: 'top_10_file2.svg', size: '3KB' },
        { name: 'avg_file1.svg', size: '1.5KB' },
        { name: 'avg_file2.svg', size: '2.5KB' }
    ];

    files.forEach(file => {
        const listItem = document.createElement('li');
        listItem.textContent = `${file.name} - ${file.size}`;
        if (file.name.startsWith('top_10_')) {
            top10List.appendChild(listItem);
        } else if (file.name.startsWith('avg_')) {
            avgList.appendChild(listItem);
        }
    });
});