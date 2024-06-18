/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { teamMembers } from '../../../public/team-member';

const createAboutUsTemplate = () => `
    <div class="about-header" data-aos="fade-down" data-aos-duration="1200">
        <img src="./images/brand-logo.png" alt="HARMA Logo" class="about-logo" loading="lazy">
        <div class="about-description">
            <h3>Apa itu HARMA?</h3>
            <p>Platform digital yang dapat memberikan akses informasi dan memantau kegiatan apa saja yang sedang terjadi di lingkungan masyarakat khususnya cakupan RT/RW. Platform ini bertujuan untuk meningkatkan keterlibatan antar masyarakat dalam berinteraksi sosial.</p>
        </div>
    </div>

    <div class="team-section">
        ${teamMembers.map((member, index) => `
            <div class="team-member" data-aos="fade-up" data-aos-duration="1200">
                <img src="${member.imgSrc}" alt="${member.alt}" class="team-photo" loading="lazy">
                <div class="team-info">
                    <h3>${member.name}</h3>
                    <p>${member.university}</p>
                    <p>${member.role}</p>
                </div>
            </div>
        `).join('')}
    </div>
`;

export { createAboutUsTemplate };
