// env.template.js
const CONFIG = {
    // สำหรับ CI ให้ใช้ GitHub Secrets -> workflow จะแทนค่าและสร้าง env.js ขณะ deploy
    CLIENT_ID: '${{ secrets.GOOGLE_CLIENT_ID }}',
    API_KEY: '${{ secrets.GOOGLE_API_KEY }}',
    DISCOVERY_DOCS: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    SCOPES: 'https://www.googleapis.com/auth/drive.readonly'
};

export default CONFIG;
