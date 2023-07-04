function __generateMockPrograms(count) {
  const cryptoCompanyNames = ['CryptoCorp', 'BlockChain Inc', 'Etherium Solutions', 'DigiCoin', 'CryptoSecure'];
  const programNames = ['Epic Contest 2023', 'Summer Bounty 2023', 'Crypto Challenge 2023', 'Security Showdown 2023', 'Hackathon 2023'];
  const programTypes = ['Smart Contract', 'Websites and Applications', 'Blockchain/DLT'];
  const logos = [
    '/__MOCK/images/company-1.png',
    '/__MOCK/images/company-2.png',
    '/__MOCK/images/company-3.png',
    '/__MOCK/images/company-4.png',
    '/__MOCK/images/company-5.png',
    '/__MOCK/images/company-6.png'
  ];

  const programs = [];

  for (let i = 0; i < count; i++) {
    const reward = Math.round((Math.random() * (400000 - 4000) + 4000) / 100) * 100;
    const companyName = cryptoCompanyNames[Math.floor(Math.random() * cryptoCompanyNames.length)];
    const programName = programNames[Math.floor(Math.random() * programNames.length)];
    const type = programTypes.filter(() => Math.random() > 0.5);
    const participatingExperts = Math.floor(Math.random() * 15) + 1;
    const lastUpdated = new Date(Math.floor(Math.random() * (new Date('2023-07-02').getTime() - new Date('2023-05-15').getTime())) + new Date('2023-05-15').getTime());
    const expirationDate = Math.random() > 0.2 ? new Date(Math.floor(Math.random() * (new Date('2023-10-02').getTime() - new Date('2023-07-30').getTime())) + new Date('2023-07-30').getTime()) : null;
    const publicId = 'CBB775' + Math.floor(1000 + Math.random() * 9000);
    const status = Math.random() > 0.2 ? 'active' : 'scheduled';
    const viewsCount = Math.floor(Math.random() * 1400) + 100;
    const submittedReportsCount = Math.floor(Math.random() * 26);
    const upvotesCount = Math.floor(Math.random() * 3954) + 13;
    const bookmarkedCount = Math.floor(Math.random() * 54) + 3;
    const logo = logos[Math.floor(Math.random() * logos.length)];

    programs.push({
      company_name: companyName,
      reward: reward,
      program_name: programName,
      type: type,
      participating_experts: participatingExperts,
      last_updated: lastUpdated.toISOString(),
      expiration_date: expirationDate ? expirationDate.toISOString() : null,
      public_id: publicId,
      status: status,
      views_count: viewsCount,
      submitted_reports_count: submittedReportsCount,
      upvotes_count: upvotesCount,
      bookmarked_count: bookmarkedCount,
      logo: logo
    });
  }

  return programs;
}


/*

__programs = __generateMockPrograms(100);
copy(JSON.stringify(__programs, 0, 2));

*/
