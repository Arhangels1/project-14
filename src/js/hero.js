'use strict';

const heroContacts = document.getElementById('hero-contacts');    
const socialMediaList = document.createElement('ul');

const socialMediaLinks = [
    { name: 'IG', url: 'https://www.instagram.com/aleksander.evko/profilecard/?igsh=NHpsdWlwZDlnOGU1' },
    { name: 'FB', url: 'https://www.facebook.com/share/18wxv2tWL4/?mibextid=LQQJ4d' },
    { name: 'YT', url: 'https://youtube.com/@arhangels50?si=-lomno3ptGN2ZwR_' },
    { name: 'GH', url: 'https://github.com/Arhangels1/project-14' }
];

const socialMediaListHTML = socialMediaLinks.map(link => `<li><a href='${link.url}' target='_blank' rel="noopener noreferrer nofollow">${link.name}</a></li>`).join('');

socialMediaList.insertAdjacentHTML('beforeend', socialMediaListHTML);
heroContacts.appendChild(socialMediaList);

const contactParagraph = document.createElement('p');
const emailLink = document.createElement('a');
emailLink.href = 'mailto:lloydjefferson@gmail.com';
emailLink.textContent = 'lloydjefferson@gmail.com';
contactParagraph.appendChild(emailLink);

heroContacts.appendChild(contactParagraph);
