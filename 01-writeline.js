let content = '';

for(let i = 1; i <= 100 ; i++) {
    content += i + '\n';
}

const fs = require('fs');
const path = 'read-file.txt';

try {
    fs.writeFileSync(path, content, 'utf8');
    console.log('파일이 성곡적으로 저장되었습니다.');
} catch (err) {
    console.log('파일쓰기 오류 - ', err.message);
}
