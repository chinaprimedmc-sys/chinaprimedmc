import mysql from 'mysql2/promise';

const config = {
  host: 'gateway03.us-east-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: 'MKmpPZiUeonLWiB.root',
  password: 'PCVHTur4dF2bqT1I97C5',
  database: 'nv3b3r8xSigzoBGpUx4ZRH',
  ssl: { rejectUnauthorized: true }
};

try {
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.execute('SELECT 1 as test');
  console.log('✅ Database connection successful:', rows);
  await connection.end();
} catch (error) {
  console.error('❌ Database connection failed:', error.message);
}
