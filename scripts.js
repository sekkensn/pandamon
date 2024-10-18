document.addEventListener('DOMContentLoaded', () => {
    const top10List = document.getElementById('top10-list');
    const avgList = document.getElementById('avg-list');

    // Actual data from the SVGraphs folder
    const files = [
        { name: 'avg_Attack_type1.svg', size: '2KB' },
        { name: 'avg_Avg_Overall_type1.svg', size: '2.5KB' },
        { name: 'avg_Defense_type1.svg', size: '2.2KB' },
        { name: 'avg_HP_type1.svg', size: '1.8KB' },
        { name: 'avg_SpAttack_type1.svg', size: '2.1KB' },
        { name: 'avg_SpDefense_type1.svg', size: '2.3KB' },
        { name: 'avg_Speed_type1.svg', size: '1.9KB' },
        { name: 'top_10_Attack.svg', size: '3KB' },
        { name: 'top_10_Defense.svg', size: '3.2KB' },
        { name: 'top_10_HP.svg', size: '2.8KB' },
        { name: 'top_10_SpAttack.svg', size: '3.1KB' },
        { name: 'top_10_SpDefense.svg', size: '3.3KB' },
        { name: 'top_10_Speed.svg', size: '2.9KB' }
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