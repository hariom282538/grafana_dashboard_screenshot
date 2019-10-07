# Grafana Dashboard Screenshot Capture - Scraper 🤖

The purpose of this scraper is to take a screenshot of grafana dashboard. 

## Usage

Inputs: 
URL: expected grafana UI URL 

### Case - 1 (when user want response in JSON format)


Sample Input 
```bash
curl --request GET --url 'http://localhost:3000/grafana'
sh runQGrafanaScraper.sh
```

Sample Output
```json
success-> [{ "type": "success" }]
error-> [{ "type": "error" }]
```


## Steps to Setup

### Tech Stack Setup

Install NodeJs, NPM or PM2

### Project Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
pm2 start server.js --name 'grafana'
```

```bash
npm start
```

### Docker Setup

1. Build
```bash
docker build -t grafana .
```

2. Run/Start
```bash
docker run -p 3000:3000 grafana
```

You can browse the APIs at <http://localhost:3000>

## Contributors
 - Hariom Vashisth
