# CoinGecko Crypto API Wrapper

โปรเจกต์นี้เป็น API Wrapper สำหรับดึงข้อมูลคริปโตเคอเรนซีจาก CoinGecko โดยใช้ NestJS และ TypeScript ออกแบบมาเพื่อให้อ่านข้อมูลได้ง่ายผ่าน Postman หรือเชื่อมต่อกับระบบอื่น

## ความต้องการของระบบ

- Node.js (แนะนำ v18 ขึ้นไป)
- npm

## การติดตั้ง

1. เข้าไปยังโฟลเดอร์โปรเจกต์
2. ติดตั้ง dependencies:
   ```bash
   npm install
   ```

## การเริ่มทำงานของระบบ

เริ่มต้นการทำงานของเซิร์ฟเวอร์ในโหมดพัฒนา (Development mode):
```bash
npm run start:dev
```
เซิร์ฟเวอร์จะทำงานอยู่ที่: http://localhost:3000

## การใช้งาน API

### ดึงข้อมูลคริปโตเคอเรนซี (Get Crypto Data)

ใช้สำหรับดึงข้อมูลราคาและสถิติพื้นฐานของคริปโตเคอเรนซีโดยใช้ ID จาก CoinGecko

- Endpoint: `/crypto/:id`
- Method: `GET`
- URL ตัวอย่าง: `http://localhost:3000/crypto/bitcoin`

### ตัวอย่างข้อมูลที่ส่งกลับ (Response Format)

```json
{
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "current_price_usd": 65432.10,
  "market_cap_usd": 1285000000000,
  "total_volume_usd": 35000000000,
  "price_change_24h_usd": 450.25,
  "price_change_percentage_24h": 0.69,
  "last_updated": "2026-03-06T21:52:19.000Z"
}
```

## โครงสร้างโปรเจกต์ที่สำคัญ

- `src/crypto/crypto.controller.ts`: จัดการเส้นทาง API (Route)
- `src/crypto/crypto.service.ts`: จัดการตรรกะการดึงข้อมูลจาก CoinGecko API
- `src/crypto/crypto.module.ts`: รวบรวมการทำงานของโมดูลคริปโต
