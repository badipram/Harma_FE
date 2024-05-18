const createAboutUsTemplate = (member) => `
    <div class="about-header">
    <img src="./images/brand-logo.png" alt="HARMA Logo" class="about-logo">
    <div class="about-description">
    <h1>Apakah itu HARMA?</h1>
    <p>Platform digital yang dapat memberikan akses informasi dan memantau kegiatan apa saja yang sedang terjadi di lingkungan masyarakat khususnya cakupan RT/RW. Platform ini bertujuan untuk meningkatkan keterlibatan antar masyarakat dalam berinteraksi sosial.</p>
    </div>
    </div>
    <div class="team-section">
    <div class="team-member">
    <img src="path/to/photo1.jpg" alt="TB Muhammad Iqbal Zikri" class="team-photo">
    <div class="team-info">
        <h3>TB Muhammad Iqbal Zikri</h3>
        <p>Universitas Cendekia Abditama</p>
        <p>Back-End Developer</p>
    </div>
    </div>
    <div class="team-member">
    <img src="path/to/photo2.jpg" alt="Reza Pradana" class="team-photo">
    <div class="team-info">
        <h3>Reza Pradana</h3>
        <p>Universitas Pamulang</p>
        <p>Front-End Developer</p>
    </div>
    </div>
    <div class="team-member">
    <img src="path/to/photo3.jpg" alt="Badi Amnu Pramuditnya" class="team-photo">
    <div class="team-info">
        <h3>Badi Amnu Pramuditnya</h3>
        <p>Universitas Pamulang</p>
        <p>UI/UX Designer</p>
    </div>
    </div>
    </div>
    `;

export { createAboutUsTemplate }; 
