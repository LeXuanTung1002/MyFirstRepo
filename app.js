const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    const html = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Danh sách sinh viên</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <h2>Danh Sách Sinh Viên</h2>
        <table>
            <tr>
                <th>MSHV</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Quê quán</th>
                <th>Email</th>
                <th>SĐT</th>
            </tr>
            <tr>
                <td>M2524026</td>
                <td>Le Xuan Tung</td>
                <td>10/02/1997</td>
                <td>Can Tho</td>
                <td>lexuantung@gmail.com</td>
                <td>093948</td>
            </tr>
			<tr>
                <td>M2524018</td>
                <td>Tran Anh Duy</td>
                <td>22/10/1997</td>
                <td>Can Tho</td>
                <td>trananhduy@gmail.com</td>
                <td>093948</td>
            </tr>
			<tr>
                <td>M2524014</td>
                <td>Nguyen Ngoc Nu</td>
                <td>19/3/1994</td>
                <td>Can Tho</td>
                <td>nguyenngocnu@gmail.com</td>
                <td>093948</td>
            </tr>
            
        </table>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
